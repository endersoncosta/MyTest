const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "mytest"
});

const functions = {
    async query(sql, values) {
        const promisePool = pool.promise();
        const [rows] = await promisePool.query(sql, values);
        return rows;
    }
};

module.exports = functions;