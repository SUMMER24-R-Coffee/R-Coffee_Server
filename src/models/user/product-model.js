const connection = require('../../config/connection');

const getProducts = async (email_user) => {
    const query = `SELECT 
    p.product_id,
    p.name AS product_name,
    p.img,
    p.description,
    p.price,
    p.category_id,
    COALESCE(AVG(r.rating), 0) AS average_rating,
    CASE 
        WHEN u.email_user IS NULL THEN NULL
        ELSE f.favorite_id
    END AS favourite_id
FROM 
    product p
LEFT JOIN 
    rating r ON p.product_id = r.product_id
LEFT JOIN 
    favorite f ON p.product_id = f.product_id
LEFT JOIN 
    Users u ON f.user_id = u.email_user AND u.email_user = ?
WHERE 
    p.is_available = 'available'
GROUP BY 
    p.product_id,
    p.name,
    p.img,
    p.description,
    p.price,
    p.category_id,
    f.favorite_id,
    u.email_user
ORDER BY 
    p.product_id;
    `;
    return await connection.queryDatabase(query,[email_user])
};

module.exports ={
    getProducts
}