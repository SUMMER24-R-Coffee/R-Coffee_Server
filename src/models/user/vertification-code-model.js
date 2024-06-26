const connection = require('../config/connection');

const storeCode = async (email_user, code) => {
    const expiration = Date.now() + 5 * 60 * 1000; // 5 minutes expiration
    const query = 'INSERT INTO verification_codes (email_user, code, expiration) VALUES (?, ?, ?)';
    await connection.queryDatabase(query, [email_user, code, expiration]);
};

const verifyCode = async (email_user, code) => {
    const query = 'SELECT * FROM verification_codes WHERE email_user = ? AND code = ?';
    const [rows] = await connection.queryDatabase(query, [email_user, code]);
    if (rows.length === 0) return false;

    const currentTime = Date.now();
    return rows[0].expiration > currentTime;
};

const deleteCode = async (email_user) => {
    const query = 'DELETE FROM verification_codes WHERE email_user = ?';
    await connection.queryDatabase(query, [email_user]);
};

module.exports={
  storeCode,
  verifyCode,
  deleteCode
}
