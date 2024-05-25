const connection = require('../../config/connection');

const getBanner = async () => {
    const query = 'SELECT * FROM banner';
    return await connection.queryDatabase(query,[])
};

module.exports = {
    getBanner
};
