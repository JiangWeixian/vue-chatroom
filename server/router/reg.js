/**
 *The regRouter
 * ------------------------
 * The Router process reg post
 * ------------------------
 */

var router = require('express').Router();

router.get('/reg', function (req, res) {
  console.log(req.usr)
});

module.exports = router;
