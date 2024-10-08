const connection = require('../../config/connection');

const getOrderByEmail = async (email_user) =>{
    const query = `
    SELECT
        o.order_id,
        o.status_order,
        o.total_amount,
        o.create_at,
        o.discount_amount,
        o.payment_method,
        o.order_message,
        b.quantity,
        SUM(b.quantity) as total_item,
        p.name,
        p.img,
        p.price ,
        a.location,
        pt.status AS payment_status,
        pt.payment_id,
        c.reason 
    FROM \`order\` o
    JOIN basket b ON o.order_id = b.order_id
    JOIN product p ON b.product_id = p.product_id
    JOIN address a ON o.address_id = a.address_id
    JOIN payment_detail pt ON o.order_id = pt.order_id
    LEFT JOIN cancel c ON o.order_id = c.order_id
    WHERE b.email_user = ?
    GROUP BY o.order_id ORDER BY o.update_at DESC
`;

    return await connection.queryDatabase(query, [email_user]);
}

const insertOrder = async (values) => {
    const query = `INSERT INTO \`order\` (order_id, payment_method, total_amount, discount_amount, address_id, voucher_id, order_message, shipping_fee) 
    VALUES (?, ?, ?, ?, ?, ?, ?, 25000); `

    return await connection.queryDatabase(query, values);
}

const updateStatusOrder = async(values) =>{
    const query = `UPDATE \`order\` SET status_order =?, update_at = NOW()   WHERE order_id =?`;

    return await connection.queryDatabase(query, values)
}

const deleteOrder = async (order_id) => {
    const query = `DELETE FROM \`order\` WHERE order_id = ?`;
    return await connection.query(query, [order_id]);
};
module.exports = {
    getOrders: getOrderByEmail,
    insertOrder,
    updateStatusOrder,
    deleteOrder
}