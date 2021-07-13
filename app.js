const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// requiere modulo para archivos .env
require('dotenv').config();


//configurar motor de vistas
const hbs=require('express-handlebars');


// agregada las rutas a las diferentes paginas
const indexRouter = require('./routes/index');
const servicesRouter = require('./routes/services');
const workOrdersRouter = require('./routes/workOrders');
const loginRouter = require('./routes/login');
const clientsRouter = require('./routes/clients');
const app = express();

//se requiere la conexion a mysql2
require('./connections/connection-mysql2');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



//seteamos las carpetas y los archivos del motor de vistas:
app.engine('hbs', hbs({
  extname:'.hbs',
  defaultLayout: 'layout',
  layoutsDir: 'views/layout',
  partialsDir: 'views/partials'
  }));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//midleware de rutas para las distintas paginas
app.use('/', indexRouter);
app.use('/services', servicesRouter);
app.use('/login', loginRouter);
app.use('/workOrders', workOrdersRouter);
app.use('/clients', clientsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
