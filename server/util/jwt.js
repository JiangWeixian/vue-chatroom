var Jwt = require('jwt-simple');
var Promise = require('bluebird');
var jwt_config = require(CONFIG_PATH + 'jwt').jwt_config;
var secret = jwt_config.secret;

/**
 * funcs encode: encode nickname/exp/aud into jwt
 * @param iss: send this token to client-owner(iss)
 * @param exp: expires time
 * @param aud: client-owner(iss) send this to server(aud)
 * @returns {{token: *, exp: number}}
 */

function encode(sub, exp, aud) {
  exp = arguments[1]? arguments[1]:60 * 60 * 1000;
  aud = arguments[2]? arguments[2]:'vuedetect';
  exp = Date.now() + exp;
  var token = Jwt.encode({
    iss: aud,
    exp: exp,
    sub: sub,
    aud: aud
  }, secret);
  return {token: token, exp: exp};
}

function decode(token) {
  return new Promise(function (resolve, reject) {
    try {
      var decodetoken = Jwt.decode(token, secret);
      resolve(decodetoken)
    }
    catch(e) {
      reject('token is invaild')
    }

  });
}


exports.encode = encode;
exports.decode = decode;
