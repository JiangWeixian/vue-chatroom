var express = require('express');
var http = require('http');
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
 * @regRouter - process reg post
 * @checkRouter - process check reg-post-data partly
 */

var loginRouter = require('./router/login');
var regRouter = require('./router/reg');
var checkRouter = require('./router/check');
var authRouter = require('./router/auth');
var chatSocket = require('./socket/chat');
var index = require('./socket/login');


/**
 * Global-Setting
 * @cookieParser process cookie
 * @bodyParser process req.body as json type
 */
app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var httpServer = http.Server(app);
var io = require('socket.io')(httpServer);


/**
 * Router
 * @use1 set cors to process request
 * @use2 set loginRouter
 * @use3 set regRouter
 * @use4 set CheckRouter
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
app.use(regRouter);
app.use(loginRouter);
app.use(checkRouter);
app.use(authRouter);

/**
 * Socket.io
 * @ process chat data
 */

io.on('connection',
  function(Socket) {
    console.log('connect successfully');
    var userSocketMap = {};
    Socket.on('login', function (data) {
      Socket.name = data.user;
      userSocketMap[data.user] = Socket.id;
      Socket.join(userSocketMap[data.user], function () {
        console.log('join successfully')
      });
      Socket.on('message', function (data) {
        console.log('message:');
        console.log(data);
        console.log(Socket.id);
        if(data.to != 'all') {
          console.log(Socket.rooms);
          io.to(userSocketMap[data.to]).emit('message', {
            text: data.text,
            author: data.author
          })
          // Socket.emit('message', {
          //   text: data.message,
          //   author: data.author
          // })
        }
      });
    })
  }
);

/**
 * Testing
 */
httpServer.listen(3000);
console.log(ROOT_PATH);
