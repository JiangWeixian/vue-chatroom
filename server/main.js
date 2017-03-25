var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

/**
 * Global-Path
 * @ROOT_PATH ./server
 */
global.ROOT_PATH = __dirname;
global.CONFIG_PATH = path.join(__dirname, 'config/');

/**
 * Extra-Package&Variable
 * @apiurl linkto mongodb
 */

var mongoConfig = require('./config/db').mongo;
var apiurl = 'mongodb://' + mongoConfig.name + ':' + mongoConfig.password + '@ds139370.mlab.com:39370/vuedetect';

/**
 * Global-Setting
 */
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(apiurl);
var db = mongoose.connecttion;

/**
 * Router
 * @use set cors to process request
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/login', function (req, res) {
  res.send('login successfully');
});

/**
 * Testing
 */
app.listen(3000);
console.log(ROOT_PATH);
