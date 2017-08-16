myApp.controller('BrewController', function($http, $location, UserService, RecipeService) {
  console.log('BrewController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;
  vm.recipe = RecipeService.selectedRecipe;

  //DATA OBJECTS
  vm.batch = {};

//GET RECIPE DATA FROM SERVER
  // Recipe loads when you click the "BREW" button on the main menu

//SAVE BREW NOTES -- ON CLICK
  vm.saveBatch = function(date, brewNotes, mashNotes, ev){
    console.log('Recipe to work with: ', vm.recipe);
    console.log('RecipeId to save: ', vm.recipe.data._id);
    console.log('Recipe batches brewed count: ', vm.recipe.data.batchesBrewed);

    var recipeID = vm.recipe.data._id;
    // INCREMENT BATCH COUNTER IN RECIPE BY 1
    var batchesBrewed = vm.recipe.data.batchesBrewed + 1;
    // BUILD DATA OBJECT TO SEND TO SERVER
    vm.batch = {
      batchID: batchesBrewed,
      brewDate: date,
      brewNotes: brewNotes,
      mashNotes: mashNotes
    };
    var dataToUpdate = {
      batchesBrewed: batchesBrewed,
      batchStatus: 'Batch brewed',
      batch: vm.batch
    };
    console.log("Batch data: ", dataToUpdate);

    // POST TO /brew to add batches[] to recipe{}
    $http.put('/brew/' + recipeID , dataToUpdate).then(function(response){
      console.log('Sending brew notes to server.');
      if(response){
        console.log('The /put server sent something back: ', response);
      }
    });

    //GET data using recipe.service
    vm.recipeService.getAllRecipes();
    console.log('After updating: ', vm.allRecipes);

    //Pop up toast notification
    vm.recipeService.showSaveNotification(ev, 'Brewed Batch notes');

  }; //end of save brew notes function

  //GET data using recipe.service
  vm.recipeService.getAllRecipes();
  console.log(vm.allRecipes);


}); //end of controller
