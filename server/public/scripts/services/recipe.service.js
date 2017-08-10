myApp.factory('RecipeService', function($http, $location){
  console.log('RecipeService Loaded');

  var originatorEv;
  var allRecipes = {};

  return {

    allRecipes: allRecipes,
    
    //OPEN MENU FUNCTIONALITY NEEDED FOR NAV BAR
    openMenu : function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    },

    //RETRIEVE ALL RECIPES IN THE DATABASE
    getAllRecipes : function(){
      $http.get('/recipe').then(function(response){
        console.log('Retrieving recipes from DB: ', response.data);
        allRecipes.data = response.data;
        console.log('All recipes: ', allRecipes);
      });
    }




  }; //end of return

}); //end of service
