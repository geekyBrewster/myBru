myApp.controller('UserController', function($http, $location, $scope, $mdDialog, UserService, RecipeService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;
  var selectedID;

  //Prep New Recipe -- On click
  vm.newRecipe = function(){
    //Switch to recipe.html using $location.path(/recipe)
    $location.path('/recipe');
  };

  //Brew existing recipe -- On click
  vm.brewBatch = function(id){
    //retreive selected recipe
    vm.recipeService.getRecipeById(id);
    //Switch to brew.html
      $location.path('/brew');
  };

  //GET data using recipe.service to display on DOM
  vm.recipeService.getAllRecipes();
  console.log(vm.allRecipes);


//** STRETCH GOALS **//
  //Edit Recipe -- on click
    //Switch to recipeEdit.html -- Make this a simpler layout that displays recipe details
    //Get recipe data and repopulate the inputs
    //Make inputs editable
    //Allow user to save -- UPDATE route for /recipe

  //Delete Recipe -- on click
  vm.deleteSelectedRecipe = function(id, ev){
    //Confirm user wants to delete that recipe
    var confirm = $mdDialog.confirm()
      .title('Are you sure you\'d like to delete: ' + id + ' ?')
      .ok('You betcha')
      .cancel('Not right now');

    //Delete the recipe from DB
    $mdDialog.show(confirm).then(vm.recipeService.deleteRecipe(id));
    console.log('Deleted id: ', id);
    
    //Update DOM
    vm.recipeService.getAllRecipes();
    console.log(vm.allRecipes);
  };

  //Bottle batch -- On click
    //Switch to bottle.html
    //batchStatus = "Bottling Batch"

  //Drink batch -- On click
    vm.drinkBatch = function(recipeName){
      //Switch to drink.html
      $location.path('/drink');
        //batchStatus = "Drinking Batch"
    };



}); //end of controller
