/**
 *The regRouter
 * ------------------------
 * The Router process reg post
 * ------------------------
 */

var router = require('express').Router();
var jwt = require('jwt-simple');
var mongodb = require(DATASETS_PATH + 'mongodb');

router.get('/reg', function (req, res) {
  var condition = req.body;
  mongodb.User.find(condition, function (err, docs) {
    if(err) {
      res.status(401);
    }
    else {
      var user = docs[0];
      if(user) {
        res.status(401);
      }
      else {
        var expires = Date.now() + 60 * 60 * 1000;
        vat token = jwt.encode({
          iss:condition.nickname,
          exp: expires,
          aud: 'vuedetect'
        }, secrete);
        res.status(200).json({
          token:token,
          expires: expires
        })
      }
    }
  })
});

module.exports = router;
