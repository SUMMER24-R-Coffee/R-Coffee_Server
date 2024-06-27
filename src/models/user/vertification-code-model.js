const connection = require('../../config/connection');

const storeCode = async (email_user, code) => {
    const expiration = Date.now() + 2 * 60 * 1000; 
    const query = 'INSERT INTO verification_codes (email_user, code, expiration) VALUES (?, ?, ?)';
    await connection.queryDatabase(query, [email_user, code, expiration]);
};

const verifyCode = async (email_user, code) => {
    const query = 'SELECT * FROM verification_codes WHERE email_user = ? AND code = ?';
    try {
        const result = await connection.queryDatabase(query, [email_user, code]);
        console.log('Database query result:', result); 

        if (!result || result.length === 0) {
            console.error('No rows found for the provided email and code');
            return false;
        }

        const verificationCodeEntry = result[0];
        if (!verificationCodeEntry) {
            console.error('No entry found');
            return false;
        }

        const currentTime = Date.now();
        const expirationTime = verificationCodeEntry.expiration;
        console.log('Expiration time:', expirationTime); // Debug log
        console.log('Current time:', currentTime); // Debug log

        return expirationTime > currentTime;
    } catch (error) {
        console.error('Error verifying code:', error.message); // Error log
        throw error;
    }
};

const deleteCode = async (email_user) => {
    const query = 'DELETE FROM verification_codes WHERE email_user = ?';
    await connection.queryDatabase(query, [email_user]);
};

module.exports = {
    storeCode,
    verifyCode,
    deleteCode
};
