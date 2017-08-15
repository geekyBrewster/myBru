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
getStyles();  //want beerStyles.category.name & beerStyles.name for each object

  return {
    beerStylesData : beerStyles
  };

}); //end of data controller
