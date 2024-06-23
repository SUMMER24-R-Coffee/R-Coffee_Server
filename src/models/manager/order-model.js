const connection= require('../../config/connection')

const getOrders = async ()=>{
    const query='SELECT * FROM `order` ORDER BY order_id DESC'

    return await connection.queryDatabase(query,[]);
}

const getOder = async (order_id) =>{
    const query = `SELECT DISTINCT o.*, b.*, a.location, v.voucher_code, u.phone, u.name, u.email_user,u.token, SUM(b.quantity) AS total_quantity 
    FROM \`order\` o 
    JOIN basket b ON o.order_id = b.order_id 
    JOIN address a ON a.address_id = o.address_id 
    LEFT JOIN voucher v ON v.voucher_id = o.voucher_id 
    JOIN users u ON u.email_user = a.email_user 
    WHERE o.order_id = ?
    AND (v.voucher_id IS NOT NULL OR v.voucher_id IS NULL)
    GROUP BY o.order_id`;
    
    return await connection.queryDatabase(query,[order_id])
}

const updateStatus = async(values)=>{
    const query = 'UPDATE `order` SET status_order =?,update_at = NOW() WHERE order_id = ?';

    return await connection.queryDatabase(query,values)
}

module.exports={
    getOrders,
    getOder,
    updateStatus
}