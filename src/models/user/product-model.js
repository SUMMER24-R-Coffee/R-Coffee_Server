const connection = require('../../config/connection');

const getProducts = async () => {
    const query = `SELECT 
    p.product_id,
    p.name AS product_name,
    p.img,
    p.description,
    p.price,
    p.category_id,
    COALESCE(AVG(r.rating), 0) AS average_rating
FROM 
    product p
LEFT JOIN 
    rating r ON p.product_id = r.product_id
WHERE 
    p.is_available = 'available'
GROUP BY 
    p.product_id,
    p.name,
    p.img,
    p.description,
    p.price,
    p.category_id
ORDER BY 
    p.product_id;
    `;
    return await connection.queryDatabase(query,[])
};

module.exports ={
    getProducts
}