var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');

// API Key is environment variables in Heroku
var api_key = process.env.API_KEY || require('../config.js').api_key;

//--** DATA REQUESTS TO BREWERY.DB API **--//
//query string for specific page: v2/hops/?key=ABCD&p=2

// GET REQUEST FOR STYLES
router.get('/styles', function(req, res){
  var dataRequested = 'styles';
  var url = 'https://api.brewerydb.com/v2/' + dataRequested + '/?key=' + api_key ;
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body); // Print the returned data
  });
});

module.exports = router;
