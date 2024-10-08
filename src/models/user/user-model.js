const connection = require("../../config/connection"); 

const checkUser = async (email_user) => {
    const query = `SELECT COUNT(*) as count FROM users WHERE email_user=?`;
    return await connection.queryDatabase(query, [email_user]);
};

const getUser = async (email_user) => {
    const query = 'SELECT * FROM `users` WHERE email_user =?';
    return await connection.queryDatabase(query, [email_user]);
};

const insertUser = async (values) => {
    const query = 'INSERT INTO `users` (email_user, password) VALUES (?, ?)';
    return await connection.queryDatabase(query, values);
};

const updateTokenUser = async (token, email_user) => {
    const query = `UPDATE users SET token = ? WHERE email_user =?`;
    const values = [token, email_user];
    return await connection.queryDatabase(query, values);
};

const updateUser = async (values) => {
    let query;
    let queryParams;

    if (values.user_img) {
        query = `UPDATE users SET user_img = ?, name = ?, gender = ?, phone = ? WHERE email_user = ?`;
        queryParams = [values.user_img, values.name, values.gender, values.phone, values.email_user];
    } else {
        query = `UPDATE users SET name = ?, gender = ?, phone = ? WHERE email_user = ?`;
        queryParams = [values.name, values.gender, values.phone, values.email_user];
    }

    return await connection.queryDatabase(query, queryParams);
};


const updatePassword = async (values) => {
    const query = 'UPDATE USERS SET password= ? WHERE email_user = ?';
    return await connection.queryDatabase(query, values);
};

module.exports = {
    checkUser,
    getUser,
    insertUser,
    updateUser,
    updatePassword,
    updateTokenUser
};
