const connection = require('../../config/connection');

const insertOrder = async (values) => {
    const query = `INSERT INTO \`order\` (order_id, payment_method, total_amount, discount_amount, address_id, voucher_id, order_message) 
    VALUES (?, ?, ?, ?, ?, ?, ?); `

    return await connection.queryDatabase(query, [values]);
}

module.exports = {
    insertOrder
}