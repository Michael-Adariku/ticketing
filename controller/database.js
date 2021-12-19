const mysql = require('mysql');

// starting the database
const dataBase = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Astro_database'
});
dataBase.connect((error) => {
  if (error) {
    console.log(`can not connect to database: ${error}`);
  } else {
    console.log('DataBase connected ...');
  }
});

module.exports = dataBase;
