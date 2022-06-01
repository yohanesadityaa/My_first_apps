const Pool = require("pg").Pool;

const pool = new Pool({
 user: "postgres",
 host: "localhost",
 database: "todo_apps",
 password: "yohanes321",
 port: "5432",
});

module.exports = pool;

