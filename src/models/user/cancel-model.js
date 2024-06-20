const connection = require('../../config/connection');

const insertCancel = async (values) => {
    const query = `INSERT INTO cancel (reason, order_id) 
    VALUES (?, ?); `

    return await connection.queryDatabase(query, values);
}


module.exports = {
    insertCancel,
}