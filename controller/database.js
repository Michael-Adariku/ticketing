const mysql = require('mysql');

// starting the database
const dataBase = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
dataBase.connect((error) => {
  if (error) {
    console.log(`can not connect to database: ${error}`);
  } else {
    console.log('DataBase connected ...');
  }
});

module.exports = dataBase;
