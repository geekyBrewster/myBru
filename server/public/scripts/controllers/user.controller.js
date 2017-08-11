myApp.controller('UserController', function($http, $location, $scope, $mdDialog, UserService, RecipeService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;
  var selectedID;
  vm.batchesInProgress = [];

  //Prep New Recipe -- On click
  vm.newRecipe = function(){
    //Switch to recipe.html using $location.path(/recipe)
    $location.path('/recipe');
  };

  //GET data using recipe.service to display on DOM
  vm.recipeService.getAllRecipes();
  console.log("Retrieving recipes: ", vm.allRecipes);

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
/*
  //Display recipes in progress -- HOW DO I DO THE COMPARISON LOGIC HERE
  --**-- I'M ALSO GETTING AN EMPTY SEARCH ARRAY --**--
  
  vm.displayBrewStatus = function(){
    console.log('Time to sort recipes!!');
    var arrayToSort = vm.allRecipes.data;
    console.log('REcipes to sort thru: ', arrayToSort);
    //Step through each object
    for(var i = 0; i < arrayToSort.length; i++){
      var batchStatus = arrayToSort[i].batchStatus;
      console.log('Batch status = ', batchStatus);
      if(batchStatus !== 'Ready to Brew'){
        vm.batchesInProgress.push(arrayToSort[i]);
      }
    }
    console.log('Non-recipe recipes: ', vm.batchesInProgress);
  };
*/
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
