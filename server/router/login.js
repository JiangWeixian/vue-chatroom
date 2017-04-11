/**
 *The loginRouter
 * ------------------------
 * The Router process login post
 * @ login-post: server accept password&nickname, and use jwt-simple create a token by secret, then
 *               send to client
 * ------------------------
 */
var router = require('express').Router();
var jwt = require('jwt-simple');
var mongodb = require(DATASETS_PATH + 'mongodb');


var jwt_config = require(CONFIG_PATH + 'jwt').jwt_config;
var secret = jwt_config.secret;

router.post('/login', function (req, res, next) {
  var condition = req.body;
  mongodb.User.findOne(condition, function (err, docs) {
    if(err) {
      res.status(401);
    }
    else {
      var user = docs;
      if(user) {
        console.log(user);
        var expires = Date.now() + 60 * 60 * 1000;
        var token = jwt.encode({
          iss: condition.nickname,
          exp: expires,
          aud: 'vuedetect'
        }, secret);
        res.status(200).json({
          token: token,
          expires: expires
        })
      }
      else {
        res.status(301).send("error");
      }
    }
  });
});

module.exports = router;
