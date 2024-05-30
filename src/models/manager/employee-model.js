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

const getEmployees = async ()=>{
    const query = `SELECT * FROM employee WHERE emp_role = 'employee' AND is_working = true`;

    return await connection.queryDatabase(query,[])    
}

const getEmployee = async (emp_id)=>{
    const query = `SELECT * FROM employee WHERE emp_id = ?`;

    return await connection.queryDatabase(query,[emp_id]);
}

const checkEmployee = async (emp_id)=>{
    const query=  `SELECT COUNT(*) as count FROM employee WHERE emp_id=?`

    return await connection.queryDatabase(query,[emp_id]);
}

const insertEmployee = async (values)=>{
    const query = `INSERT INTO employee (emp_id, emp_password, emp_name,  emp_gender, emp_img, emp_phone) VALUES (?, ?, ?, ?, ?, ?) `;

    return await connection.queryDatabase(query, values);
}

const updateEmployee = async (values)=>{
    const query = `UPDATE employee SET emp_password = ?, emp_name= ?, emp_gender = ?, emp_img = ?, emp_phone = ? WHERE emp_id = ? `;

    return await connection.queryDatabase(query, values);

}

const deleteEmployee = async (emp_id) =>{
    const query = `UPDATE employee SET is_working = false WHERE emp_id=?`;

    return await connection.queryDatabase(query, [emp_id]);
}


module.exports = {
    getLogin,
    getEmployees,
    getEmployee,
    insertEmployee,
    updateEmployee,
    checkEmployee,
    deleteEmployee
};
