/**
 *The authRouter
 * ------------------------
 * @ image-get: client send image request, send image file to client
 *              - maybe use package-imagemagic
 * ------------------------
 */

var router = require('express').Router();
var path = require('path');
var fs = require('fs');

router.get('/image/application', function (req, res) {
  console.log('image');
  var query = req.query;
  var AppType = query.type
    ,fileName = query.filename;
  var IMG_FOLDER_PATH = path.join(IMG_APP_PATH, AppType);
  var filePath = path.join(IMG_FOLDER_PATH, fileName);
  fs.exists(filePath, function (exit) {
    res.sendFile(filePath)
    //res.sendFile('/home/eric/WebstormProjects/vuedetect/server/static/img/application/movie/movie.png')
  });
  console.log(filePath)
});

module.exports = router;
