var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var passport = require('passport');
var path = require('path');


/**
 * Global-Path
 * @ROOT_PATH ./server
 * @CONFIG_PATH ./server/config
 * @DATASETS_PATH ./server/datasets
 * @ROUTER_PATH ./server/router
 * @UTIL_PATH ./server/util
 */
global.ROOT_PATH = __dirname;
global.CONFIG_PATH = path.join(ROOT_PATH, 'config/');
global.DATASETS_PATH = path.join(ROOT_PATH, 'datasets/');
global.ROUTER_PATH = path.join(ROOT_PATH, 'router/');
global.UTIL_PATH = path.join(ROOT_PATH, 'util/');

/**
 * ExRra-Package&Variable
 * @loginRouter - process login post
 */

var loginRouter = require('./router/login');
var regRouter = require('./router/reg');


/**
 * Global-Setting
 * @cookieParser process cookie
 * @bodyParser process req.body as json type
 * @session process/store status with session
 *     - secret: will be code-in-hash to cookie
 *     - resave(true): will save
 *     - saveUninitialized(true): each request will store session-cookie
 *     - cookie: in http&https;stored time
 * @passport login oauth
 */
app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/**
 * Router
 * @use1 set cors to process request
 * @use2 set loginRouter
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
app.get('/',function (req, res) {
  if (req.cookie) {
    console.log("ok");
  }
  next();
});
app.use(loginRouter);
app.use(regRouter);

/**
 * Testing
 */
app.listen(3000);
console.log(ROOT_PATH);
