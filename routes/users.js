var express = require('express');
var router = express.Router();



function User_generator (nombre, apellido, edad, redes, frase){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.redes = redes
  this.frase = frase
};

let user1 = new User_generator('ale', 'guzman', '29', ['@janoguz'], 'holamundo');
let user2 = new User_generator('nico', 'perez', '26', [], 'otrafrase');

router.get

const users =  [];

users.push(user1, user2);



/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('users.hbs', {title : "usuarios", users});
});

module.exports = router;
