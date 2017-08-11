myApp.factory('RecipeService', function($http, $location){
  console.log('RecipeService Loaded');

  var originatorEv;
  var allRecipes = {};
  var selectedRecipe = {};

  return {
    allRecipes: allRecipes,

    //OPEN MENU FUNCTIONALITY NEEDED FOR NAV BAR
    openMenu : function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    },

    //RETRIEVE ALL RECIPES IN THE DATABASE
    getAllRecipes : function(){
      $http.get('/recipe/all').then(function(response){
        console.log('Retrieving recipes from DB: ', response.data);
        allRecipes.data = response.data;
        console.log('All recipes: ', allRecipes);
      });
    },

    //RETRIEVE SINGLE RECIPE FROM DB BY RECIPE ID
    getRecipeById : function(id){
      var searchId = id;
      $http.get('/recipe/one/' + searchId).then(function(response){
        console.log('Retrieving ONE recipe from DB: ', response.data);
        selectedRecipe.data = response.data;
        console.log('Single recipes: ', selectedRecipe);
      });
    },

    //LOAD SELECTED RECIPE AND MOVE TO BREW.html
    loadSingleRecipe : function(id){
      //Grab recipe's ID
      console.log('recipe id: ', id);


      //Confirm batchID = 1 if no other IDs exist; otherwise increment ID by 1
      //batchStatus = "Brewing Batch"
    }






  }; //end of return

}); //end of service
