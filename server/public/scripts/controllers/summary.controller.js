myApp.controller('SummaryController', function($http, $location, $scope, $q, UserService, RecipeService) {
  console.log('SummaryController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;

  //GET data using recipe.service
  vm.recipeService.getAllRecipes();
  console.log(vm.allRecipes);

  //xeditabel functions

  // cancel all changes

  //save edits
  $scope.saveTable = function() {
    var results = [];
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];
      // actually delete user
      if (user.isDeleted) {
        $scope.users.splice(i, 1);
      }
      // mark as not new
      if (user.isNew) {
        user.isNew = false;
      }

      // send on server
      results.push($http.post('/saveUser', user));
    }

    return $q.all(results);
  };


  //PUT updated recipe data -- /update/recipe/id
  vm.updateRecipe = function(){

  };

  //PUT updated brew batch data  -- /update/brew/id
  vm.updateBrew = function(){

  };

  //PUT updated drink brew data  -- /update/drink/id
  vm.updateDrink = function(){

  };



}); // end of controller
