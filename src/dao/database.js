const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const functions = {
    async query(sql, values) {
        const promisePool = pool.promise();
        const [rows] = await promisePool.query(sql, values);
        return rows;
    }
};

module.exports = functions;