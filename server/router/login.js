/**
 *The loginRouter
 * ------------------------
 * The Router process login post
 * @ login-post: server accept password&nickname, and use jwt-simple create a token by secret, then
 *               send to client
 * ------------------------
 */
var router = require('express').Router();
var jwt = require(UTIL_PATH + 'jwt');
var mongodb = require(DATASETS_PATH + 'mongodb');


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
        var encode_info = jwt.encode(condition.nickname);
        res.status(200).json(encode_info);
      }
      else {
        res.status(301).send("error");
      }
    }
  });
});

module.exports = router;
