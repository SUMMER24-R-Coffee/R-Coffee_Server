require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
    console.log('Connected to the database successfully!');
});

const queryDatabase = (query, values) => {
    return new Promise((resolve, reject) => {
        con.query(query, values, (err, results, fields) => {
            if (err) {
                reject(err);
                console.error('Error executing query:', err);
                return;
            }
            resolve(results);
        });
    });
};

module.exports = {
    con,
    queryDatabase
};
