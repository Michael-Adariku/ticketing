const mysql = require('mysql');

// starting the database
const dataBase = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = dataBase;