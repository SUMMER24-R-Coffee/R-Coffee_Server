const connection = require('../../config/connection')

const getVouchers = async () =>{
    const query = 'SELECT * FROM voucher WHERE is_visible = true ORDER BY voucher_id DESC';

    return await connection.queryDatabase(query,[]);
}

const getVoucher = async (voucher_id) =>{
    const query = 'SELECT * FROM voucher WHERE voucher_id = ?';
    return await connection.queryDatabase(query,[voucher_id]);
}

const insertVoucher = async (values) =>{
    const query = 'INSERT INTO voucher (voucher_code, percent, valid_date, exp_date) VALUES (?, ?, ?, ?)';
    return await connection.queryDatabase(query,values);

}

const updateVoucher = async (values) =>{
    const query = 'UPDATE voucher SET voucher_code = ?, percent = ?, valid_date = ?, exp_date = ? WHERE voucher_id = ?';
    return await connection.queryDatabase(query,values);

}

const deleteVoucher = async (voucher_id) =>{
    const query = 'UPDATE voucher SET is_visible = false WHERE voucher_id = ?';
    return await connection.queryDatabase(query, [voucher_id]);
}

module.exports={
    getVouchers,
    getVoucher,
    insertVoucher,
    updateVoucher,
    deleteVoucher
}