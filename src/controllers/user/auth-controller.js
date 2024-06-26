const crypto = require('crypto');
const nodemailer = require('nodemailer');
const VerificationCode = require('../../models/user/vertification-code-model');
const User = require('../../models/user/user-model');
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
    }

    async requestCode(req, res) {
        const email_user = req.body.email_user;
        const verificationCode = crypto.randomBytes(3).toString('hex').toUpperCase();

        try {
            await VerificationCode.storeCode(email_user, verificationCode);

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email_user,
                subject: 'Your Verification Code',
                text: `Your verification code is: ${verificationCode}`
            };

            await this.transporter.sendMail(mailOptions);

            res.status(200).send('Verification code sent to email.');
        } catch (error) {
            res.status(500).send('Error sending email: ' + error.message);
        }
    }

    async register(req, res) {
        const { email_user, password, code } = req.body;

        try {
            const isValidCode = await VerificationCode.verifyCode(email_user, code);
            if (!isValidCode) {
                return res.status(400).send('Invalid or expired verification code.');
            }

            const userExists = await User.checkUser(email_user);
            if (userExists.count > 0) {
                return res.status(400).send('User already exists.');
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await User.insertUser([email_user, hashedPassword, null]);
            await VerificationCode.deleteCode(email_user);

            res.status(200).send('User registered successfully.');
        } catch (error) {
            res.status(500).send('Error registering user: ' + error.message);
        }
    }
}

module.exports = new AuthController();
