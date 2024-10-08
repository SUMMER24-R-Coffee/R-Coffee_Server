const connection = require('../../config/connection');

const insertPaymentDetail = async (values) => {
    const query = `INSERT INTO payment_detail (status, order_id) 
    VALUES (?, ?); `

    return await connection.queryDatabase(query, values);
}

const updatePaymentDetail = async (values) => {
    const query = `UPDATE payment_detail SET status = ? WHERE order_id =?`;
    return await connection.queryDatabase(query, values);
};
module.exports = {
    insertPaymentDetail,
    updatePaymentDetail
}