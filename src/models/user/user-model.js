const connection = require('../../config/connection');

const checkUser = async (email_user)=>{
    const query=  `SELECT COUNT(*) as count FROM users WHERE email_user=?`

    return await connection.queryDatabase(query,[email_user]);
}

const getUser = async(email_user) =>{
    const query='SELECT * FROM `users` WHERE email_user =?'

    return await connection.queryDatabase(query,[email_user])
}

const insertUser = async(values)=>{
    const query ='INSERT INTO `users` (email_user, password) VALUES (?, ?)'

    return await connection.queryDatabase(query, values)
}

const updateUser = async (values) => {
    let query = `UPDATE users SET password = ?, name = ?, gender = ?, phone = ? `;
    const queryParams = [values.password, values.name, values.gender, values.phone, values.email_user];

    if (values.user_img) {
        query = `UPDATE users SET password = ?, user_img = ?, name = ?, gender = ?, phone = ? `;
        queryParams.splice(1, 0, values.user_img);
    }

    query += 'WHERE email_user = ?';
    return await connection.queryDatabase(query, queryParams);
};

const updatePassword = async (values)=>{
    const query = 'UPDATE USERS SET password= ? WHERE email_user = ?'
     
    return await connection.queryDatabase(query,values)
}
module.exports={
    checkUser,
    getUser,
    insertUser,
    updateUser,
    updatePassword
}