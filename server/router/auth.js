/**
 *The authRouter
 * ------------------------
 * @ check-post: client send token, check it!
 * ------------------------
 */

var router = require('express').Router();
var jwtConfig = require(CONFIG_PATH + 'jwt');
var jwt = require(UTIL_PATH + 'jwt');

var iss = jwtConfig.iss
  ,secret = jwtConfig.secret;

router.post('/auth', function (req, res) {
  var token = req.body.token || req.Authorization;
  var decodetoken = jwt.decode(token);
  var now = Date.now();

  if(token) {
    jwt.decode(token).then(function (decodetoken) {
      if(decodetoken.exp > now) {
        console.log('token is vaild!');
        res.status(200).send('token is vaild!')
      }
      else {
        console.log('token is invaild!');
        res.status(301).send('token is invaild!');
      }
    }, function (err) {
      console.log(err);
      res.status(301).send(err);
    })
  }
  else {
    console.log('use this func should post with token');
    res.status(301).send('use this func should post with token');
  }
});

module.exports = router;
