myApp.factory('ApiDataService', function($http){
  console.log('API Data Service Loaded');

// Objects that will store our various sets of data
  var beerStyles = [];

  return {
    beerStyles : beerStyles,

    /** GET STYLES -- Call to BreweryDB API to fetch beer styles info **/
    //Returns 170 styles w/ 15 category names
     getStyles : function() {
      console.log('Going to get beer styles data.');
      return $http.get('/data/styles/')
        .then(function(response){
          beerStyles = response.data.data;
          console.log("dataArray styles: ", beerStyles);
          return response;
        });
    } // end of GET styles

  };

}); //end of data controller
