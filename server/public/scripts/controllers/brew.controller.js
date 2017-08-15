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
  // GET REQUEST FOR SINGLE RECIPE
  vm.recipeService.loadRecipe();
  // APPEND REQUIRED RECIPE DATA TO DOM
  // Figure out how to update ingredientAdded when checkbox is clicked

//'ADDED' CHECKBOX FUNCTIONALITY
  vm.checkBox = function(type, ingredientName, ingredientType){
    //On checkbox click, change ingredient's Added status to 'true'
    console.log('Checkbox clicked for: ', ingredientName);
    console.log('Going to seach for: ', type);
    var searchArray = "";

  //Search through all ingredient arrays to find matching name, once found change added status to true
    if (type == "malts"){
      searchArray = vm.recipe.data.malts;
      //SEARCH MALTS
      for(var i = 0; i < searchArray.length; i++){
        if(ingredientName == searchArray[i].maltName && !searchArray[i].maltAdded ){
          searchArray[i].maltAdded = true;
          console.log('Found it. Added set to true.');
        } else {
          console.log('Ingredient not found yet.');
        }
      }
    } else if (type == "hops") {
      searchArray = vm.recipe.data.hops;
      //SEARCH HOPS
      for(var j = 0; j < searchArray.length; j++){
        if(ingredientName == searchArray[j].hopName || ingredientType == searchArray[j].hopType && !searchArray[j].hopAdded ){
          searchArray[j].hopAdded = true;
          console.log('Found it. Added set to true.');
        } else {
          console.log('Ingredient not found yet.');
        }
      }
    } else if (type == "yeasts") {
      searchArray = vm.recipe.data.yeasts;
      //SEARCH YEASTS
      for(var k = 0; k < searchArray.length; k++){
        if(ingredientName == searchArray[k].yeastType && !searchArray[k].yeastAdded ){
          searchArray[k].yeastAdded = true;
          console.log('Found it. Added set to true.');
        } else {
          console.log('Ingredient not found yet.');
        }
      }
    } else if (type == "ingredients") {
      searchArray = vm.recipe.data.otherIngredients;
      //SEARCH OTHER INGREDIENTS
      for(var l = 0; l < searchArray.length; l++){
        if(ingredientName == searchArray[l].ingredientType && !searchArray[l].ingredientAdded ){
          searchArray[l].ingredientAdded = true;
          console.log('Found it. Added set to true.');
        } else {
          console.log('Ingredient not found yet.');
        }
      }
    } else {
      console.log('typo on inputted ingredient.');
    }
  }; //end checkbox function -- Not very DRY (needs work)

//SAVE BREW NOTES -- ON CLICK
  vm.saveBatch = function(date, brewNotes, mashNotes){
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
    vm.recipeService.showSaveToast();

  }; //end of save brew notes function

  //GET data using recipe.service
  vm.recipeService.getAllRecipes();
  console.log(vm.allRecipes);


}); //end of controller
