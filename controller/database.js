

const dataBase = require('./dbConnector');

console.log(process.env.DB_HOST);
dataBase.connect((error) => {
  if (error) {
    console.log(`can not connect to database: ${error}`);
  } else {
    console.log('DataBase connected ...');
  }
});

module.exports = dataBase;
