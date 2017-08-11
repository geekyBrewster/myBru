myApp.controller('UserController', function($http, $location, $scope, $mdDialog, UserService, RecipeService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;
  var selectedID;
  var batchesInProgress = [];

  //Prep New Recipe -- On click
  vm.newRecipe = function(){
    //Switch to recipe.html using $location.path(/recipe)
    $location.path('/recipe');
  };

  //GET data using recipe.service to display on DOM
  vm.recipeService.getAllRecipes();
  console.log(vm.allRecipes);

  //Brew existing recipe -- On click
  vm.brewBatch = function(id){
    //retreive selected recipe
    vm.recipeService.getRecipeById(id);
    //Switch to brew.html
      $location.path('/brew');
  };

  //Brew existing recipe -- On click
  vm.drinkBatch = function(id){
    //retreive selected recipe
    vm.recipeService.getRecipeById(id);
    //Switch to brew.html
      $location.path('/drink');
  };

  //Display recipes in progress
  function displayBrewStatus(){
    console.log('Time to sort recipes!!');
    //Retrieve all recipes in DB
    vm.recipeService.getAllRecipes();
    console.log('REcipes to sort thru: ', vm.allRecipes);
    //Step through each object
    for(var i = 0; i < vm.allRecipes.length; i++){
      var batchStatus = vm.allRecipes[i].batchStatus;
      if(batchStatus !== 'Ready to Brew'){
        batchesInProgress.push(vm.allRecipes[i]);
      }
    }
  }
  displayBrewStatus();

  //Delete Recipe -- on click
  vm.deleteSelectedRecipe = function(name, id, ev){
    //Confirm user wants to delete that recipe
    var confirm = $mdDialog.confirm()
      .title('Are you sure you\'d like to delete: ' + name + ' ?')
      .ok('You betcha')
      .cancel('Not right now');

    //Delete the recipe from DB
    $mdDialog.show(confirm).then(vm.recipeService.deleteRecipe(id));
    console.log('Deleted id: ', id);

    //Update DOM
    vm.recipeService.getAllRecipes();
    console.log(vm.allRecipes);
  };




//** STRETCH GOALS **//
  //Edit Recipe -- on click
    //Switch to recipeEdit.html -- Make this a simpler layout that displays recipe details
    //Get recipe data and repopulate the inputs
    //Make inputs editable
    //Allow user to save -- UPDATE route for /recipe

  //Bottle batch -- On click
    //Switch to bottle.html
    //batchStatus = "Bottling Batch"


}); //end of controller
