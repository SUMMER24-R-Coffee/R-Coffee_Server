const connection = require('../../config/connection');

const insertOrder = async (values) => {
    const query = `INSERT INTO \`order\` (order_id, payment_method, total_amount, discount_amount, address_id, voucher_id, order_message) 
    VALUES (?, ?, ?, ?, ?, ?, ?); `

    return await connection.queryDatabase(query, values);
}

const deleteOrder = async (order_id) => {
    const query = `DELETE FROM \`order\` WHERE order_id = ?`;
    return await connection.query(query, [order_id]);
};
module.exports = {
    insertOrder,
    deleteOrder
}