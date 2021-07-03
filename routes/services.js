var express = require('express');
var router = express.Router();
const sqlcon= require('../connections/connection-mysql2');

router.get('/', function(req, res, next) {
  res.render('services');


});
/* INGRESO DE DATOS DEL FRONT_END */
router.post('/', (req,res) =>{
  console.log(req.body);
  const body = req.body;

sqlcon.query(`INSERT INTO usuarios VALUES (null, '${body.email}', '${body.password}', '${body.nombre}', '${body.edad}', '${body.foto_perfil}')`,(error, result)=>{ //generalmente aca tiene que haber la misma cantidad de columnas que en sql, el cliente puede llenarlas todas o no
  if (error){
      console.error(error);
      return res.render('error');
  };
  console.log(result);
  res.render('success');
});



});

module.exports = router;
