var express = require('express');
var router = express.Router();
//conexion a SQL
const sqlcon= require('../connections/connection-mysql2');

/* ENVIO DE DATOS AL FRONT-END */
router.get('/', function(req, res, next) {

  
  sqlcon.query('SELECT * FROM WO', (err, result) =>{
    if (err) {
      console.error(err);
      res.render('error');
    }
    res.render('clients', {result: result, layout:"clients-layout.hbs"}); // como es asincronico, el renderizado tiene que estar dentro del callback para que se renderise cuando los datos esten disponibles
  });
  
});



module.exports = router;