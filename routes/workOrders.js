var express = require('express');
var router = express.Router();
const sqlcon= require('../connections/connection-mysql2');

router.get('/', function(req, res, next) {
  res.render('workOrders', {layout: 'workOrders-layout.hbs'});


});
/* INGRESO DE DATOS DEL FRONT_END */
router.post('/', (req,res) =>{
  console.log(req.body);
  const body = req.body;

sqlcon.query(`INSERT INTO WO VALUES (null, '${body.nombre}', '${body.email_cliente}', '${body.tipo_trabajo}', '${body.fecha}', '${body.telefono}', '${body.id_fk}')`,(error, result)=>{ //generalmente aca tiene que haber la misma cantidad de columnas que en sql, el cliente puede llenarlas todas o no
  if(error){
    console.error(error);
  };

  sqlcon.on('end', function() {
    console.log('query finalizada');   //finalizo la petision query para que se pueda realizar otra nuevamente
  });
  console.log(result);
  res.render('success');
});




});

module.exports = router;
