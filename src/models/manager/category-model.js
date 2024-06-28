const connection = require('../../config/connection');

const getCategorys = async () => {
    const query = 'SELECT * FROM category';
    return await connection.queryDatabase(query,[])
};


const insertCategory = async (name) => {
    const query = 'INSERT INTO category (name) VALUES (?)'; 
    
    return await connection.queryDatabase(query, [name]);
};

const updateCategory = async (values) => {
    const query = 'UPDATE category SET name = ? WHERE category_id = ?';
    return await connection.queryDatabase(query, values);

}
const checkCategory = async (category_id) =>{
    const query = 'SELECT * from category where category_id=? ';

    return await connection.queryDatabase(query, [category_id]);
}


module.exports = {
    getCategorys,
    insertCategory,
    updateCategory,
    checkCategory
};
