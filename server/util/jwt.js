var Jwt = require('jwt-simple');
var jwt_config = require(CONFIG_PATH + 'jwt').jwt_config;
var secret = jwt_config.secret;

/**
 * funcs encode: encode nickname/exp/aud into jwt
 * @param iss: send this token to client-owner(iss)
 * @param exp: expires time
 * @param aud: client-owner(iss) send this to server(aud)
 * @returns {{token: *, exp: number}}
 */

function encode(iss, exp, aud) {
  exp = arguments[1]? arguments[1]:60 * 60 * 1000;
  aud = arguments[2]?arguments[2]:'vuedetect';
  exp = Date.now() + exp;
  var token = Jwt.encode({
    iss: iss,
    exp: exp,
    aud: aud
  }, secret);
  return {token: token, exp: exp};
}

exports.encode = encode;
