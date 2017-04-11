/**
 *The regRouter
 * ------------------------
 * The Router process reg post
 * ------------------------
 */

var router = require('express').Router();
var jwt = require('jwt-simple');
var Promoise = require('bluebird');
var mongodb = require(DATASETS_PATH + 'mongodb');


var jwt_config = require(CONFIG_PATH + 'jwt').jwt_config;
var secret = jwt_config.secret;

router.post('/reg', function (req, res, next) {
  var condition = req.body;
  mongodb.User.findOne(condition, function (err, docs) {
    if(err) {
      res.status(401).send("mongo error");
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
        res.status(301).send("already find this user");
      }
      else {
        res.status(200).json({
          token: token,
          expires: expires
        });
      }
    }
  });
});

function findAccountOrNickname(conditions) {

}
module.exports = router;
