myApp.factory('RecipeService', function($http, $location, $mdToast, $mdDialog){
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

    //DELETE RECIPE
    deleteRecipe : function(id){
      console.log('I will delete: ', id);
      //Create DELETE route to use recipe _id to delete that recipe
      $http.delete('/recipe/' + id).then(function(response){
        console.log('Recipe deleted');
      });
    },

    //Show "Recipe Saved" Notification
    showSaveNotification : function(ev, type){
      var alert = $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(false)
            .title(type + ' saved!')
            .textContent('You will now be returned to the main menu.')
            .ok('Got it!')
            .targetEvent(ev);

      $mdDialog.show(alert).then(function(){
          $location.path('/user');
        });
    }



  }; //end of return

}); //end of service
