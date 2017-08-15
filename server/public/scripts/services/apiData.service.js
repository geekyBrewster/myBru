myApp.factory('ApiDataService', function($http){
  console.log('API Data Service Loaded');

// Object storing our various sets of data
  var beerData = {};

  return {
    beerData : beerData,

    /** GET STYLES -- Call to BreweryDB API to fetch beer styles info **/
    //Returns 170 styles w/ 15 category names
     getStyles : function() {
      console.log('Going to get beer styles data.');
      return $http.get('/data/styles/')
        .then(function(response){
          beerData.styles = response.data.data;
          console.log("dataArray styles: ", response.data);
          return response;
        });
    } // end of GET styles

  };

}); //end of data controller
