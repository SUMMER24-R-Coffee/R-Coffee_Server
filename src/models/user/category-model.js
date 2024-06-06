const connection = require('../../config/connection');

const getCategorys = async () => {
    const query = 'SELECT * FROM category';
    return await connection.queryDatabase(query,[])
};

module.exports={
    getCategorys
}