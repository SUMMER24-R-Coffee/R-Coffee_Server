const connection = require('../../config/connection');

const getAdress = async (email_user)=>{
    const query = 'SELECT * FROM address WHERE email_user =?';

    return await connection.queryDatabase(query,[email_user])
}

const insertAddress = async(value) =>{
    const query = `INSERT INTO address (location, email_user) VALUES (?, ?)`;

    return await connection.queryDatabase(query,value)
}

module.exports={
    getAdress,
    insertAddress
}