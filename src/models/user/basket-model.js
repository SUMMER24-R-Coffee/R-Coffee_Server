const connection = require('../../config/connection');

const getBasket = async (email_user)=>{
    const query = `SELECT c.name as category_name, p.name, p.img, p.price, b.*
    FROM basket b 
    JOIN product p ON b.product_id = p.product_id 
    JOIN category c ON p.category_id = c.category_id
    WHERE b.email_user =? AND b.order_id IS NULL`

    return await connection.queryDatabase(query, [email_user])
}

const insertBasket = async(values)=>{
    const query = `INSERT INTO basket (quantity, product_id, email_user)
    VALUES (?, ?, ?)`

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

const addToBasket = async (product_id, email_user) => {
    const checkQuery = `SELECT basket_id, quantity
                        FROM basket
                        WHERE product_id = ? AND email_user = ? AND order_id IS NULL`;

    const result = await connection.queryDatabase(checkQuery, [product_id, email_user]);

    if (result.length > 0) {
        const { basket_id, quantity } = result[0];
        const newQuantity = quantity + 1;
        await updateBasket([newQuantity, basket_id]);
    } else {
        await insertBasket([1, product_id, email_user]);
    }
};

const updateToBasket = async (quantity, product_id, email_user) => {
    const checkQuery = `SELECT basket_id, quantity
                        FROM basket
                        WHERE product_id = ? AND email_user = ? AND order_id IS NULL`;

    const result = await connection.queryDatabase(checkQuery, [product_id, email_user]);

    if (result.length > 0) {
        const { basket_id, quantity: currentQuantity } = result[0];
        const newQuantity = currentQuantity + quantity;
        await updateBasket([newQuantity, basket_id]);
    } else {
        await insertBasket([quantity, product_id, email_user]);
    }    
}


module.exports={
    getBasket,
    insertBasket,
    updateBasket,
    deleteBasket,
    addToBasket,
    updateToBasket
}