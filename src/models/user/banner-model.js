const connection = require('../../config/connection');

const getBanners = async ()=>{
    const query = 'SELECT * FROM banner';
    return await connection.queryDatabase(query,[])
}

module.exports ={
    getBanners
}