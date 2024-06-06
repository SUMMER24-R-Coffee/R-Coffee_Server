const connection = require('../../config/connection');

const getProducts = async () => {
    const query = `SELECT p.*, c.name AS category 
        FROM product p 
        JOIN category c ON p.category_id = c.category_id 
        WHERE p.is_available like 'available'
        ORDER BY p.product_id DESC
    `;
    return await connection.queryDatabase(query,[])
};

module.exports ={
    getProducts
}