/**
 *The checkRouter
 * ------------------------
 * @ check-post: client send nickname or account, check if nickname or account already exits,
 *               if exit in datasets? return tpl = {'field': conditionKey, 'msg': 'exit', 'rule': 'unique'} : {'field': '', 'msg': '', 'rule': ''}
 * ------------------------
 */

var router = require('express').Router();
var mongodb = require(DATASETS_PATH + 'mongodb');
var checkTpl = require(CONFIG_PATH + 'tpl').checkTpl;

router.post('/check', function (req, res) {
  var condition = req.body;
  var conditionKey = Object.keys(condition)[0];
  var tpl = checkTpl;
  console.log(conditionKey);
  mongodb.User.findOne(condition, function (err, docs) {
    if(err) {
      res.status(401).send("mongodb error");
    }
    else {
      var user = docs;
      tpl['field'] = conditionKey;
      if(user) {
        tpl['msg'] = conditionKey + 'already exit!';
        res.status(301).json(tpl);
      }
      else {
        res.status(200).send(tpl);
      }
    }
  })
});

module.exports = router;
