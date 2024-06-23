const connection = require('../../config/connection');

const getProducts = async (email_user) => {
    const query = `
SELECT 
    p.product_id,
    p.name AS product_name,
    p.img,
    p.description,
    p.price,
    p.category_id,
    COALESCE(AVG(r.rating), 0) AS average_rating,
    COALESCE(uf.favorite_id, null) AS favorite_id
FROM 
    product p
LEFT JOIN 
    rating r ON p.product_id = r.product_id
LEFT JOIN 
    (
        SELECT 
            f.product_id,
            f.favorite_id
        FROM 
            favorite f
        JOIN 
            users u ON f.user_id = u.email_user
        WHERE 
            u.email_user = ?
    ) uf ON p.product_id = uf.product_id
WHERE 
    p.is_available = 'available'
GROUP BY 
    p.product_id, p.name, p.img, p.description, p.price, p.category_id, uf.favorite_id
ORDER BY 
    p.product_id;

    `
    return await connection.queryDatabase(query,[email_user])
};

module.exports ={
    getProducts
}