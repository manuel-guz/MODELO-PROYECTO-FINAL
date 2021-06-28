//se importa modulo de mysql2 BBDD
const mysqlConfig = require('../config/config');
const mysql = require('mysql2');
const connection = mysql.createConnection(mysqlConfig.mysql);
connection.connect((error) =>{
  if (error) {
    console.error(error);
    process.exit();
  }
  console.log('Conexión mysql realizada correctamente');
});

module.exports = connection;
