const connection = require('../../config/connection')

const totalAmountLast12Month = async ()=>{
    const query ='SELECT SUM(o.total_amount) AS total_amount ' +
    'FROM `order` o '+
    'WHERE o.status_order = `delivered` '+
   ' AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)';

   return await connection.queryDatabase(query, []);
}

const totalAmountLastMonth = async ()=>{
    const query='SELECT SUM(total_amount) AS total_sum  FROM `order`WHERE status_order = `delivered` AND order_date >= NOW() - INTERVAL 30 DAY'

    return await connection.queryDatabase(query,[]);
}

const totalAmountToday = async ()=>{
    const query = 'SELECT SUM(total_amount) AS total_sum FROM `order` WHERE status_order = `delivered`  AND DATE(order_date) = CURDATE()';

    return await connection.queryDatabase(query, [])
}

const totalOrderLastMonth = async ()=>{
    const query= 'SELECT COUNT(*) AS total_orders FROM `order` WHERE status_order = `delivered` AND order_date >= NOW() - INTERVAL 30 DAY';

    return await connection.queryDatabase(query,[])
}

const totalOrderToday = async () =>{
    const query = 'SELECT COUNT(*) AS total_orders AS total_sum FROM `order` WHERE status_order = `delivered`  AND DATE(order_date) = CURDATE()';

    return await connection.queryDatabase(query,[]);

}

const totalOrderCancelledLastMonth = async ()=>{
    const query= 'SELECT COUNT(*) AS total_orders FROM `order` WHERE status_order = `cancelled` AND order_date >= NOW() - INTERVAL 30 DAY';

    return await connection.queryDatabase(query,[])
}

const totalOrderCancelledToday = async () =>{
    const query = 'SELECT COUNT(*) AS total_orders AS total_sum FROM `order` WHERE status_order = `cancelled`  AND DATE(order_date) = CURDATE()';

    return await connection.queryDatabase(query,[]);

}

const totalItemOrderLastMonth = async () =>{
    const query ='SELECT SUM(b.quantity) AS total_quantity FROM `basket` b JOIN `order` o ON b.order_id = o.order_id WHERE o.status_order = `delivered` AND o.order_date >= NOW() - INTERVAL 30 DAY';
    
    return await connection.queryDatabase(query,[]);
    
}

const totalItemOrderToday = async ()=>{
    const query = 'SELECT SUM(b.quantity) AS total_quantity FROM `basket` b JOIN `order` o ON b.order_id = o.order_id WHERE o.status_order = `delivere` AND DATE(o.order_date) = CURDATE() ';

    return await connection.queryDatabase(query,[]);

}


module.exports={
    totalAmountLast12Month,
    totalAmountLastMonth,
    totalAmountToday,
    totalOrderLastMonth,
    totalOrderToday,
    totalOrderCancelledLastMonth,
    totalOrderCancelledToday,
    totalItemOrderLastMonth,
    totalItemOrderToday,

}