var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

/*=====GLOBAL-PATH=====*/
global.ROOT_PATH = __dirname;

/*=====EXTRA-PACKAGE=====*/

/*=====GLOBAL-SETTING=====*/
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*=====ROUTER=====*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/login', function (req, res) {
  res.send('login successfully');
});

/*=====TESTING=====*/
app.listen(3000);
console.log(ROOT_PATH);
