const crypto = require('crypto');
const nodemailer = require('nodemailer');
const VerificationCode = require("../../models/user/vertification-code-model");
const User = require("../../models/user/user-model");
const bcrypt = require('bcrypt');
require('dotenv').config(); 

class AuthController {
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

            res.status(200).json({status:"success", message: 'Verification code sent to email.' });
        } catch (error) {

            res.status(500).json({status:"error", message: 'Error sending email: ' + error.message });
        }
    }

    async register(req, res) {
        const { email_user, password, code, token} = req.body;

        try {
            const isValidCode = await VerificationCode.verifyCode(email_user, code);
            if (!isValidCode) {
                return res.status(400).json({ status: "error", message: 'Invalid or expired verification code.' });
            }

            await User.insertUser([email_user, password]);
            await VerificationCode.deleteCode(email_user);

            return res.status(200).json({ status: "success", message: 'User registered successfully.' });
        } catch (error) {
            return res.status(500).json({ status: "error", message: 'Error registering user: ' + error.message });
        }
    }
}

module.exports = new AuthController();
