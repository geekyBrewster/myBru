myApp.factory('RecipeService', function($http, $location, $mdToast){
  console.log('RecipeService Loaded');

  var originatorEv;
  var allRecipes = {};
  var selectedRecipe = {};

  return {
    allRecipes: allRecipes,
    selectedRecipe: selectedRecipe,

    //OPEN MENU FUNCTIONALITY NEEDED FOR NAV BAR
    openMenu : function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    },

    //RETRIEVE ALL RECIPES IN THE DATABASE (Promise chaining)
    getAllRecipes : function(){
      return $http.get('/recipe/all').then(function(response){
          console.log('Retrieving ALL recipes from DB: ', response.data);
          allRecipes.data = response.data;
          console.log('All recipes: ', allRecipes);
        return response;
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

    //LOAD SINGLE RECIPE FOR USE ON PAGE
    loadRecipe : function(){
      console.log("Loading data from: ", selectedRecipe);
    },

    //DELETE RECIPE
    deleteRecipe : function(id){
      console.log('I will delete: ', id);
      //Create DELETE route to use recipe _id to delete that recipe
      $http.delete('/recipe/' + id).then(function(response){
        console.log('Recipe deleted');
      });
    },

    //Show "Recipe Saved" Toast Notification
    showSaveToast : function(){
        var toast = $mdToast.simple()
          .textContent('Recipe Saved!')
          .action('Okay')
          .position('top right' );

      $mdToast.show(toast).then(function(response){
        if ( response == 'ok') {
          $location.path('/user');
        }
      });
    }



  }; //end of return

}); //end of service
