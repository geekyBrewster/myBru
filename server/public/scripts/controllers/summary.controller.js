myApp.controller('SummaryController', function($http, $location, UserService, RecipeService) {
  console.log('SummaryController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;

  //GET data using recipe.service
  vm.recipeService.getAllRecipes();
  console.log(vm.allRecipes);

  //PUT updated recipe data -- /update/recipe/id

  //PUT updated brew batch data  -- /update/brew/id

  //PUT updated drink brew data  -- /update/drink/id




}); // end of controller
