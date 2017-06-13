/**
 * Created by eric on 6/1/17.
 */
/**
 *The applicationRouter
 * ------------------------
 * @ application/movie-get: client get-(application/movie)-request, server send data(contain:imgURL, text, URL);
 *                          notice that server never send image files, just URL
 * ------------------------
 */

var router = require('express').Router();
var path = require('path');
var fs = require('fs');
var url = require(CONFIG_PATH + 'base').appImgUrl;

var temp = {
  header: {
    avatar: url + '?type=movie&filename=movie.jpg',
    name: 'movie'
  },
  info: {
    creater: 'office',
    type: 'office',
    follow: 1000,
    post: 1,
    body: {
      title: 'office movie application',
      sketch: 'movie big boom!'
    }
  },
  home: [
    {
      name: 'wonder_woman1',
      img: url + '?type=movie&filename=wonder_women.jpg',
      imdb: 'www.imdb.com',
      time: Date.now(),
      like: 9700
    },
    {
      name: 'wonder_woman2',
      img: url + '?type=movie&filename=wonder_women.jpg',
      imdb: 'www.imdb.com',
      time: Date.now(),
      like: 9700
    },
    {
      name: 'wonder_woman3',
      img: url + '?type=movie&filename=wonder_women.jpg',
      imdb: 'www.imdb.com',
      time: Date.now(),
      like: 9700
    },
    {
      name: 'wonder_woman4',
      img: url + '?type=movie&filename=wonder_women.jpg',
      imdb: 'www.imdb.com',
      time: Date.now(),
      like: 9700
    }
  ]
};

router.param('type', function (req, res, next, type) {
  console.log(type);
  next()
});

router.get('/application/:type', function (req, res, next) {
  console.log('movie');
  console.log(req.params);
  res.status(200).send(temp);
  next()
});

module.exports = router;
