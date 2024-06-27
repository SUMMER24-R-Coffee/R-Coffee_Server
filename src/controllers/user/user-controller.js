const crypto = require('crypto');
const nodemailer = require('nodemailer');
const VerificationCode = require("../../models/user/vertification-code-model");
const User = require("../../models/user/user-model");
const bcrypt = require('bcrypt');
require('dotenv').config();

class UserController {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        this.requestCode = this.requestCode.bind(this);
        this.register = this.register.bind(this);
    }

    async requestCode(req, res) {
        const email_user = req.body.email_user;
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        try {
            const users = await User.checkUser(email_user);
            const userCount = users[0].count;

            if (userCount > 0) {
                return res.send({ status: "error", message: "Email already exists." });
            }

            await VerificationCode.storeCode(email_user, verificationCode);

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email_user,
                subject: 'Your Verification Code',
                text: `Your verification code is: ${verificationCode}`
            };

            await this.transporter.sendMail(mailOptions);

            res.status(200).json({ status: "success", message: 'Verification code sent to email.' });
        } catch (error) {
            res.status(500).json({ status: "error", message: 'Error sending email: ' + error.message });
        }
    }

    async register(req, res) {
        const { email_user, password, code } = req.body;
        console.log("User information", email_user, code);

        try {
            const isValidCode = await VerificationCode.verifyCode(email_user, code);
            if (!isValidCode) {
                console.log("Error", "Invalid code");
                return res.status(400).json({ status: "error", message: 'Invalid or expired verification code.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const insertValues = [email_user, hashedPassword];

            await User.insertUser(insertValues);
            await VerificationCode.deleteCode(email_user);

            return res.status(200).json({ status: "success", message: 'User registered successfully.' });
        } catch (error) {
            console.log("Error log", error.message);
            return res.send({ status: "error", message: 'Error registering user: ' + error.message });
        }
    }

    async login(req, res) {
        const { email_user, password } = req.body;
        console.log("Login Request 🌶️", email_user);

        try {
            const result = await User.getUser(email_user);

            if (result.length === 0) {
                return res.status(404).json({
                    status: "error",
                    message: "User does not exist",
                });
            }

            // const hashedPassword = result[0].password;
            // const isPasswordValid = await bcrypt.compare(password, hashedPassword);

            if (password) {
                return res.json({
                    status: "success",
                    message: "Login successful",
                    users: {
                        email_user: result[0].email_user,
                        gender: result[0].gender,
                        phone: result[0].phone,
                        user_img: result[0].user_img,
                        name: result[0].name,
                    },
                });
            } else {
                return res.status(401).json({ status: "error", message: "Password is incorrect" });
            }
        } catch (error) {
            console.error("Error during login 🌶️", error);
            return res.status(500).json({ status: "error", message: "Internal Server Error: " + error.message });
        }
    }

    async getUser(req, res) {
        const { email_user } = req.params;

        try {
            const result = await User.getUser(email_user);

            if (result.length === 0) {
                return res.status(404).json({ status: "error", message: "User not found" });
            }

            return res.json({
                status: "success",
                users: result,
            });
        } catch (error) {
            console.error("Error fetching user 🌶️", error);
            return res.status(500).json({ status: "error", message: "Internal Server Error: " + error.message });
        }
    }

    async updateTokenUser(req, res) {
        const { email_user } = req.params;
        const { token } = req.body;

        try {
            const result = await User.updateTokenUser(token, email_user);

            if (result.affectedRows > 0) {
                console.log("Update User Token", "Success");
                return res.status(202).json({ status: "success", message: "Success" });
            } else {
                console.log("Update User Token", "Failed");
                return res.status(404).json({ status: "error", message: "Failed" });
            }
        } catch (error) {
            console.error("Error updating user token 🌶️", error);
            return res.status(500).json({ status: "error", message: "Internal Server Error: " + error.message });
        }
    }

    async updateUser(req, res) {
      const values = req.body;

      try {
          const result = await User.updateUser(values);

          if (result.affectedRows > 0) {
              console.log("Update User", "Success");
              return res.status(202).json({ status: "success", message: "User updated successfully" });
          } else {
              console.log("Update User", "Failed");
              return res.status(404).json({ status: "error", message: "User update failed" });
          }
      } catch (error) {
          console.error("Error updating user 🌶️", error);
          return res.status(500).json({ status: "error", message: "Internal Server Error: " + error.message });
      }
  }

  async updatePassword(req, res) {
      const { email_user, password } = req.body;

      try {
          // const hashedPassword = await bcrypt.hash(newPassword, 10);
          const values = [password, email_user];
          const result = await User.updatePassword(values);

          if (result.affectedRows > 0) {
              console.log("Update Password", "Success");
              return res.status(202).json({ status: "success", message: "Password updated successfully" });
          } else {
              console.log("Update Password", "Failed");
              return res.status(404).json({ status: "error", message: "Password update failed" });
          }
      } catch (error) {
          console.error("Error updating password 🌶️", error);
          return res.status(500).json({ status: "error", message: "Internal Server Error: " + error.message });
      }
  }    
}

module.exports = new UserController();
