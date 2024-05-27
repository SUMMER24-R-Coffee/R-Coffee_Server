const connection = require('../../config/connection');

const getLogin = async (emp_id) => {
    const query = 'SELECT * FROM employee WHERE emp_id = ?';
    try {
        const [results] = await connection.queryDatabase(query, [emp_id]);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error; 
    }
};

module.exports = {
    getLogin
};
