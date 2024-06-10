const connection = require('../../config/connection');

const getFavorites = async(email_user)=>{
    const query = `SELECT * FROM favorite WHERE email_user=?`

    return await connection.queryDatabase(query,[email_user])
}
const insertFavorite = async (values)=>{
    const query =`INSERT INTO favorite (product_id, email_user) VALUES (?, ?)`;

    return await connection.queryDatabase(query, values)
}

const deleteFavorite = async (favorite_id) =>{
    const query = `DELETE favorite WHERE favorite_id= ?`

    return await connection.queryDatabase(query, [favorite_id])
}

module.exports={
    getFavorites,
    insertFavorite,
    deleteFavorite
}