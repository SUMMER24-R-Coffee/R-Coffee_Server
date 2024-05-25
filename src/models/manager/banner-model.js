const connection = require('../../config/connection');

const getBanner = async () => {
    const query = 'SELECT * FROM banner';
    return await connection.queryDatabase(query,[])
};

const insertBanner = async (img) => {
    const query = 'INSERT INTO banner (img) VALUES (?)'; 
    return await connection.queryDatabase(query, [img]);
};

const deleteBanner = async (banner_id) =>{
    const query = 'DELETE FROM banner WHERE banner_id = ?';
    return await connection.queryDatabase(query, [banner_id]);
}


module.exports = {
    getBanner,
    insertBanner,
    deleteBanner
};
