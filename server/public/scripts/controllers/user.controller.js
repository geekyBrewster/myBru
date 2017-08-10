myApp.controller('UserController', function($http, $location, UserService, RecipeService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;

  //Prep New Recipe -- On click
  vm.newRecipe = function(){
    //Switch to recipe.html using $location.path(/recipe)
    $location.path('/recipe');
  };

  //Brew existing recipe -- On click
  vm.brewBatch = function(recipeName){
    //Switch to brew.html
    $location.path('/brew');
    //Confirm batchID = 1 if no other IDs exist; otherwise increment ID by 1
    //batchStatus = "Brewing Batch"
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
    //Confirm user wants to delete that recipe
    //Create DELETE route to use recipe _id to delete that recipe

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
