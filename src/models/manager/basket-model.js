const connection = require('../../config/connection')

const getBaskets = async (order_id)=>{
    const query =`SELECT b.*, p.name as product_name , p.img as product_img, p.price FROM basket b
    JOIN product p ON b.product_id = p.product_id
    WHERE b.order_id= ? `;

    return await connection.queryDatabase(query,[order_id])
}

module.exports={
    getBaskets
}