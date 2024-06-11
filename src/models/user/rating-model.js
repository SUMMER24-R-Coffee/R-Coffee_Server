const connection = require('../../config/connection')

const getRatings = async(product_id)=>{
    const query = `SELECT r.*, u.name as user_name, u.user_img FROM rating r
    JOIN users u ON r.email_user = u.email_user
    JOIN product p ON p.product_id = r.product_id
    WHERE p.product_id= ?`;

    return await connection.queryDatabase(query,[product_id])
}

const insertRating = async(values)=> {
    const query = `INSERT INTO rating (rating, review, product_id, email_user) VALUES (?, ?, ?, ?)`;

    return await connection.queryDatabase(query,values)

}

module.exports={
    getRatings,
    insertRating
}