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

const getProduct = async (product_id) => {
    const query = 'SELECT * FROM product WHERE product_id = ?';
    return await connection.queryDatabase(query, [product_id]);
};


const insertProduct = async (values) => {
    const query = 'INSERT INTO product (name, img, description, price, category_id) VALUES (?, ?, ?, ?, ?)'; 
    return await connection.queryDatabase(query, values);
};

const updateProduct = async (values) => {
    let query = 'UPDATE product SET name = ?, description = ?, price = ?, category_id = ?';
    const queryParams = [values.name, values.description, values.price, values.category_id, values.product_id];

    if (values.img) {
        query = 'UPDATE product SET name = ?, img = ?, description = ?, price = ?, category_id = ? WHERE product_id = ?';
        queryParams.splice(1, 0, values.img); 
    } else {
        query += ' WHERE product_id = ?';
    }

    return await connection.queryDatabase(query, queryParams);
}


const deleteProduct = async (product_id) =>{
    const query = 'UPDATE product SET is_available ="is available" WHERE product_id = ?';
    return await connection.queryDatabase(query, [product_id]);
}


module.exports = {
    getProducts,
    getProduct,    
    insertProduct,
    updateProduct,
    deleteProduct
};
