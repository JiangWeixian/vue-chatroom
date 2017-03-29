/**
 *The loginRouter
 * ------------------------
 * The Router process login post
 * ------------------------
 */
var router = require('express').Router();
var mongodb = require(DATASETS_PATH + 'mongodb');


router.post('/login', function (req, res, next) {
  condition = req.body;
  console.log(req.cookie);
  req.session.usr = req.body.nickname;
  res.send("ok");
  mongodb.User.find(condition, function (err, docs) {
    if(err)
      console.log(err);
    else
      console.log(docs);
  });
});

module.exports = router;
