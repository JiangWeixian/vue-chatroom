/**
 * The Datasets Module
 * ----------------------
 * Create MongoDatasets, and export Datesets-Models
 * ----------------------
 * @dbConfig datasets config
 * @apiurl link to mlab driver
 * @userSchema create user-schema
 * @models create user-model by user-schema
 */

var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;
var dbConfig = require(CONFIG_PATH + 'db').mongo;
var apiurl = 'mongodb://' + dbConfig.name + ':' + dbConfig.password + '@ds139370.mlab.com:39370/vuedetect';

var userSchema = new Schema({
  nickname: {type: String, unique: true},
  account: {type: String, unique: true},
  password: {type: String}
});
var models = {
  User: mongoose.model('User', userSchema)
};

mongoose.connect(apiurl);

console.log(apiurl);

module.exports = models;



