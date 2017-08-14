myApp.controller('ApiController', function($http){
  var dc = this;
  console.log('Controller connected');
//GET REQUEST - Hop data

// Objects that will store our various sets of data
dc.hopData = [];
dc.yeastData = [];
dc.maltData = [];
dc.beerStyles = [];
dc.categoryIDs = [];

/** GET HOPS -- Call to BreweryDB API to fetch hops info **/
 dc.getHops = function() {
  console.log('Going to get hop data.');
  $http.get('/data/hops/')
    .then(function(response){
      dc.hopData = response.data.data;
      console.log("dataArray hops: ", dc.hopData);
    });
}; // end of GET hops

/** GET YEAST -- Call to BreweryDB API to fetch yeast info **/
 dc.getYeasts = function() {
  console.log('Going to get yeast data.');
  $http.get('/data/yeast/')
    .then(function(response){
      dc.yeastData = response.data.data;
      console.log("dataArray: ", dc.yeastData);
    });
}; // end of GET yeast

/** GET MALTS -- Call to BreweryDB API to fetch fermentables info **/
 dc.getMalts = function() {
  console.log('Going to get fermentables data.');
  $http.get('/data/malts/')
    .then(function(response){
      dc.maltData = response.data.data;
      console.log("dataArray: ", dc.maltData);
    });
}; // end of GET malts

/** GET STYLES -- Call to BreweryDB API to fetch beer styles info **/
 dc.getStyles = function() {
  console.log('Going to get beer styles data.');
  $http.get('/data/styles/')
    .then(function(response){
      console.log('Full beer style response: ', response);
      dc.beerStyles = response.data.data;
      console.log("dataArray: ", dc.beerStyles);
    });
}; // end of GET styles

/** GET CATEGORIES -- Call to BreweryDB API to fetch category IDs for beer styles **/
 dc.getCategories = function() {
  console.log('Going to get category ID data.');
  $http.get('/data/categories/')
    .then(function(response){
      console.log('All categories response: ', response);
      dc.categoryIDs = response.data.data;
      console.log("dataArray categories: ", dc.categoryIDs);
    });
}; // end of GET styles

}); //end of data controller
