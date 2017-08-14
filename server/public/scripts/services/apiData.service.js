myApp.factory('ApiDataService', function($http){
  console.log('API Data Service Loaded');

// Objects that will store our various sets of data
var hopData = [];
var yeastData = [];
var maltData = [];
var beerStyles = [];
var categoryIDs = [];

/** GET HOPS -- Call to BreweryDB API to fetch hops info **/
 getHops = function() {
  console.log('Going to get hop data.');
  $http.get('/data/hops/')
    .then(function(response){
      hopData = response.data.data;
      console.log("dataArray hops: ", hopData);
    });
}; // end of GET hops

/** GET YEAST -- Call to BreweryDB API to fetch yeast info **/
 getYeasts = function() {
  console.log('Going to get yeast data.');
      $http.get('/data/yeasts')
        .then(function(response){
          //console.log("Full yeast response: ", response); //response.data - need currentPage, data, numberOfPages, totalResults
          yeastData = response.data.data;
          console.log("dataArray yeasts: ", yeastData);
        });
      }; // end of GET yeast

/** GET MALTS -- Call to BreweryDB API to fetch fermentables info **/
 getMalts = function() {
  console.log('Going to get fermentables data.');
  $http.get('/data/malts/')
    .then(function(response){
      maltData = response.data.data;
      console.log("dataArray malts: ", maltData);
    });
}; // end of GET malts

/** GET STYLES -- Call to BreweryDB API to fetch beer styles info **/
 getStyles = function() {
  console.log('Going to get beer styles data.');
  $http.get('/data/styles/')
    .then(function(response){
      beerStyles = response.data.data;
      console.log("dataArray styles: ", beerStyles);
    });
}; // end of GET styles

/** GET CATEGORIES -- Call to BreweryDB API to fetch category IDs for beer styles **/
 getCategories = function() {
  console.log('Going to get category ID data.');
  $http.get('/data/categories/')
    .then(function(response){
      categoryIDs = response.data.data;
      console.log("dataArray categories: ", categoryIDs);
    });
}; // end of GET styles


//CALL FUNCTIONS TO RETRIEVE DATA FROM API
getYeasts();
//getMalts();
//getHops();
//getStyles();
getCategories();

//Merge Categories w/ Beer Styles and return new array


  return {
    hopApiData : hopData,
    yeastApiData : yeastData,
    maltApiData : maltData,
    beerStylesApiData : beerStyles
  };

}); //end of data controller
