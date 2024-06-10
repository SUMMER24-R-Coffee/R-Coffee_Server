const connection = require('../../config/connection');

const getBasket = async (email_user)=>{
    const query = `SELECT c.name as category_name, p.name, p.img, p.price, b.*
    FROM basket b 
    JOIN product p ON b.product_id = p.product_id 
    JOIN category c ON p.category_id = c.category_id
    WHERE b.email_user =?`

    return await connection.queryDatabase(query, [email_user])
}

const insertBasket = async(values)=>{
    const query = `INSERT INTO basket (quantity, product_id, email_user, order_id)
    VALUES (?, ?, ?, ?)`

    return await connection.queryDatabase(query, values)
}

const updateBasket = async(values)=>{
    const query = `UPDATE basket SET quantity = ? WHERE basket_id=?`

    return await connection.queryDatabase(query, values)
}

const deleteBasket = async (basket_id) =>{
    const query = `DELETE basket WHERE basket_id= ?`

    return await connection.queryDatabase(query, [basket_id])
}

module.exports={
    getBasket,
    insertBasket,
    updateBasket,
    deleteBasket
}