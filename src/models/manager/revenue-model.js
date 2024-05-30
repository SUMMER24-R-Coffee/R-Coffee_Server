const connection = require('../../config/connection')

const getTotalAmount = async (interval) => {
    let query = `
        SELECT SUM(o.total_amount) AS total_amount
        FROM \`order\` o
        WHERE o.status_order = 'delivered'
    `;

    if (interval === '12_months') {
        query += ` AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)`;
    } else if (interval === 'last_month') {
        query += ` AND o.order_date >= NOW() - INTERVAL 30 DAY`;
    } else if (interval === 'today') {
        query += ` AND DATE(o.order_date) = CURDATE()`;
    }

    return await connection.queryDatabase(query, []);
}

const getTotalOrders = async (interval, status = 'delivered') => {
    let query = `
        SELECT COUNT(*) AS total_orders
        FROM \`order\`
        WHERE status_order = ?
    `;

    if (interval === 'last_month') {
        query += ` AND order_date >= NOW() - INTERVAL 30 DAY`;
    } else if (interval === 'today') {
        query += ` AND DATE(order_date) = CURDATE()`;
    }else if (interval === '12_months') {
        query += ` AND order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)`;
    }

    return await connection.queryDatabase(query, [status]);
}

const getTotalItemsOrdered = async (interval) => {
    let query = `
        SELECT SUM(b.quantity) AS total_quantity
        FROM \`basket\` b
        JOIN \`order\` o ON b.order_id = o.order_id
        WHERE o.status_order = 'delivered'
    `;

    if (interval === 'last_month') {
        query += ` AND o.order_date >= NOW() - INTERVAL 30 DAY`;
    } else if (interval === 'today') {
        query += ` AND DATE(o.order_date) = CURDATE()`;
    }else if (interval === '12_months') {
        query += ` AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)`;
    }
    return await connection.queryDatabase(query, []);
}

const getRevenueLast12Months = async () => {
    const query = `
        WITH months AS (
            SELECT DATE_FORMAT(NOW() - INTERVAL n.number MONTH, '%Y-%m') AS month
            FROM (
                SELECT 0 AS number
                UNION ALL SELECT 1
                UNION ALL SELECT 2
                UNION ALL SELECT 3
                UNION ALL SELECT 4
                UNION ALL SELECT 5
                UNION ALL SELECT 6
                UNION ALL SELECT 7
                UNION ALL SELECT 8
                UNION ALL SELECT 9
                UNION ALL SELECT 10
                UNION ALL SELECT 11
            ) AS n
        ),
        order_stats AS (
            SELECT 
                DATE_FORMAT(order_date, '%Y-%m') AS month,
                COUNT(order_id) AS total_orders,
                SUM(total_amount) AS total_amount
            FROM \`order\`
            WHERE status_order = 'delivered'
              AND order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
            GROUP BY DATE_FORMAT(order_date, '%Y-%m')
        ),
        basket_stats AS (
            SELECT 
                DATE_FORMAT(o.order_date, '%Y-%m') AS month,
                SUM(b.quantity) AS total_quantity
            FROM \`order\` o
            LEFT JOIN \`basket\` b ON o.order_id = b.order_id
            WHERE o.status_order = 'delivered'
              AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
            GROUP BY DATE_FORMAT(o.order_date, '%Y-%m')
        )
        SELECT 
            m.month,
            COALESCE(b.total_quantity, 0) AS total_quantity,
            COALESCE(o.total_amount, 0) AS total_amount,
            COALESCE(o.total_orders, 0) AS total_orders
        FROM months m
        LEFT JOIN order_stats o ON m.month = o.month
        LEFT JOIN basket_stats b ON m.month = b.month
        ORDER BY m.month;
    `;
    return await connection.queryDatabase(query, []);
};


module.exports={
    getTotalAmount,
    getTotalOrders,
    getTotalItemsOrdered,
    getRevenueLast12Months    

}





