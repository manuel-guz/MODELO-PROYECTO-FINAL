var express = require('express');
var router = express.Router();
const sqlcon= require('../connections/connection-mysql2');


router.get('/', function(req, res, next) {
  //req.app.locals.layout = 'login';
  res.render('login', {layout:"login-layout.hbs"});   ///////a prueba de nuevo layout
});

/* INGRESO DE DATOS DEL FRONT_END */
router.post('/', (req, res) =>{
  console.log(req.body);
  const body = req.body;

  if ((body.email_user === "berni@berni.com" & body.usuario === "berni" & body.contraseña === "berni") || (body.email_user === "nico@nico.com" & body.usuario === "nico" & body.contraseña === "nico") || (body.email_user === "dani@dani.com" & body.usuario === "dani" & body.contraseña === "dani")) {
  res.render('loginPass', {nombre: body.usuario });
  } 
  else if (body.email_user === "admin@admin.com" & body.usuario === "admin" & body.contraseña === "admin") {
    res.render('loginPassAdmin', {nombre: body.usuario });
    
  }
  else{
    res.render('no-client');
  };

});








module.exports = router;


