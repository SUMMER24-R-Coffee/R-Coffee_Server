const connection = require('../../config/connection');

const getVoucher = async () => {
    const query = `SELECT * FROM voucher WHERE exp_date > NOW() AND is_visible = true`;
    
    return await connection.queryDatabase(query, []);
}

module.exports = getVoucher;