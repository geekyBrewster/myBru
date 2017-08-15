myApp.controller('SummaryController', function($http, $location, UserService, RecipeService) {
  console.log('SummaryController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;






}); // end of controller
