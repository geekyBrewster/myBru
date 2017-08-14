myApp.factory('ApiDataService', function($http){
  console.log('API Data Service Loaded');

// Objects that will store our various sets of data
var beerStyles = [];

/** GET STYLES -- Call to BreweryDB API to fetch beer styles info **/
//Returns 170 styles w/ 15 category names
 getStyles = function() {
  console.log('Going to get beer styles data.');
  $http.get('/data/styles/')
    .then(function(response){
      beerStyles = response.data.data;
      console.log("dataArray styles: ", beerStyles);
    });
}; // end of GET styles

//CALL FUNCTIONS TO RETRIEVE DATA FROM API
getStyles();                  //want beerStyles.category.name & beerStyles.name for each object

  return {
    beerStylesData : beerStyles
  };

}); //end of data controller

//---- UNUSED GET REQUESTS -------
//var yeastData = [];
//var maltData = [];
//var hopData = [];

/** GET YEAST -- Call to BreweryDB API to fetch yeast info **/
/* 384 YEASTS IN THE API -- GOING TO LEAVE AS USER ENTERED VALUE
getYeasts = function() {
  console.log('Going to get yeast data.');
      $http.get('/data/yeasts')
        .then(function(response){
          yeastData = response.data.data;
          console.log("dataArray yeasts: ", yeastData);
        });
      }; // end of GET yeast
getYeasts();

/** GET MALTS -- Call to BreweryDB API to fetch fermentables info **/
/* Returns 248 results on 5 pages
 getMalts = function() {
  console.log('Going to get fermentables data.');
  $http.get('/data/malts')
    .then(function(response){
      //console.log('Full malt data: ', response);
      maltData = response.data.data;
      console.log("dataArray malts: ", maltData);
    });
}; // end of GET malts
*/


/** GET HOPS -- Call to BreweryDB API to fetch hops info **/
/*/Returns 195 results on 4 pages
getHops = function(url) {
  console.log('Going to get hop data.');
  $http.get(url)
    .then(function(response){
      //console.log('Full hop data: ', response);
      hopData = hopData.concat(response.data.data);
      console.log("dataArray hops: ", hopData);
    });
}; // end of GET hops
getHops('/data/hops/1');
getHops('/data/hops/2');
getHops('/data/hops/3');
getHops('/data/hops/4');      //want hopData.name for each object
*/
