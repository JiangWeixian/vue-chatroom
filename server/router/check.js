/**
 *The checkRouter
 * ------------------------
 * @ check-post: client send nickname or account, check if nickname or account already exits
 * ------------------------
 */

var router = require('express').Router();
var mongodb = require(DATASETS_PATH + 'mongodb');

router.post('/check', function (req, res) {
  var condition = req.body;
  mongodb.User.findOne(condition, function (err, docs) {
    if(err) {
      res.status(401).send("mongodb error");
    }
    else {
      var user = docs;
      if(user) {
        res.status(301).send("account or nickname already exits")
      }
      else {
        res.status(200).send("your can use this nickname or account")
      }
    }
  })
});
