/**
 *The regRouter
 * ------------------------
 * The Router process reg post
 * @ reg-post: client send nickname/accout/passwd, reg-post check those info in datasets; then add to datasets
 * ------------------------
 */

var router = require('express').Router();
var jwt = require(UTIL_PATH + 'jwt');
var mongodb = require(DATASETS_PATH + 'mongodb');


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
        res.status(301).send("already find this user");
      }
      else {
        var encode_info = jwt.encode(condition.nickname);
        var newUser = new mongodb.User(condition);
        newUser.save();
        res.status(200).json(encode_info);
      }
    }
  });
});

module.exports = router;
