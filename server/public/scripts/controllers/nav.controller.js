myApp.controller('NavController', function(UserService, RecipeService) {
  console.log('NavController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;

}); //end of controller
