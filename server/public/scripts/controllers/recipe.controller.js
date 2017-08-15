myApp.controller('RecipeController', function($http, $location, $scope, $mdToast, UserService, RecipeService, ApiDataService) {

  console.log('RecipeController created');

  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.apiService = ApiDataService;


  //INGREDIENT DATA - FROM MY DATA OBJECTS, THE DATABASE AND THE API
  vm.ingredients = ingredients;
  vm.recipe = {};
  vm.allRecipes = RecipeService.allRecipes;


  //CONSTRUCT BEER STYLES PULLDOWN DATA
  vm.beerData = ApiDataService.beerData;
  //console.log('Beer styles accessible from recipe.html: ', vm.beerData);
  vm.beerCategories = [];
  vm.filteredStyles = [];
  var id = 1;
  var category = {};
  var beerStyle = {};

  function buildBeerCategories(){
    //for each category.id push category.name into beerCategories[]
      //Step through the array of Objects
      for(var i = 0; i < vm.beerData.styles.length; i++){
        if(id == vm.beerData.styles[i].categoryId){
          //If nothing in array for index number, push name object into categories[]
          category = {};
          category.name = vm.beerData.styles[i].category.name;
          //console.log("Adding this category to array: ", vm.beerData.styles[i].category.name);
          vm.beerCategories.push(category);
          //increment id finder up one to search for next category id-name pair
          id += 1;
        } else {
          //ignore duplicate category id-name pairs
          //console.log("Duplicate category.id found.");
        }
      }
      console.log('beer categories data: ', vm.beerCategories);
  }
buildBeerCategories();

vm.filteredBeerStyles = function(categoryName){
  console.log('Category to filter by: ', categoryName);
  //for each category.name that matches push it into filteredBeerStyles[]
    //Step through the array of Objects
    for(var i = 0; i < vm.beerData.styles.length; i++){
      if(categoryName == vm.beerData.styles[i].category.name){
        //If nothing in array for index number, push name object into categories[]
        beerStyle = {};
        beerStyle.name = vm.beerData.styles[i].name;
        console.log("Adding this beer style object to array: ", beerStyle);
        vm.filteredStyles.push(beerStyle);
        //increment id finder up one to search for next category id-name pair
        id += 1;
      } else {
        //ignore styles that don't match the category
        console.log("This style doesn't fit the category");
      }
    }
    console.log('beer categories data: ', vm.filteredStyles);
};
//-----** NEED TO CLEAR OUT THE FILTERED ARRAY WHEN YOU SELECT A NEW CATEGORY OTHERWISE STYLES APPEND IN THE ARRAY" **-------

  //DATA CONTAINERS FOR STORAGE OF USER ENTERED VALUES
  vm.malts = [];
  vm.hops = [];
  vm.yeasts = [];
  vm.otherIngredients = [];

//** MALT FUNCTIONS **/
  // addMalt() button function
  vm.addMalt = function(maltType, maltName, maltAmtLbs, maltAmtOz){
    // Push single malt object into malts[]
    var singleMalt = {
      maltType: maltType,
      maltName: maltName,
      maltAmtLbs: maltAmtLbs,
      maltAmtOz: maltAmtOz,
      maltAdded: false
    };
    // console.log("Single malt: ", singleMalt);
    vm.malts.push(singleMalt);
    // console.log('malt array: ', vm.malts);
    // Appends to DOM via vm.malts
  };

  // Remove selected malt from the malts[]
  vm.deleteMalt = function(maltName){
    console.log('Looking to delete malt: ', maltName);
    console.log('Looking to remove it from: ', vm.malts);
    for(var i = 0; i < vm.malts.length; i++){
      if(maltName == vm.malts[i].maltName){
        console.log('Going to remove: ', vm.malts[i]);
        vm.malts.splice(i,1);
      } else {
        console.log('This is not the ingredient object I\'m looking for.');
      }
    }
  };



//** HOP FUNCTIONS **/
  // addHop() button function
  vm.addHop = function(hopType, hopName, hopForm, hopUse, hopAmt, hopTimeBrew, hopTimeDry){
    // Push single hop object into hops[]
    var singleHop = {
      hopType: hopType,
      hopName: hopName,
      hopAmt: hopAmt,
      hopForm: hopForm,
      hopUse: hopUse,
      hopTimeBrew: hopTimeBrew,
      hopTimeDry: hopTimeDry,
      hopAdded: false
    };
    // console.log("Single hop: ", singleHop);
    vm.hops.push(singleHop);
    // console.log('hop array: ', vm.hops);
    // Appends to DOM via vm.hops
  };

  // Remove selected hop from the hops[]
  vm.deleteHop = function(hopType, hopName){
    //console.log('Looking to delete malt: ', hopName);
    //console.log('Looking to remove it from: ', vm.hops);
    for(var i = 0; i < vm.hops.length; i++){
      if(hopType == vm.hops[i].hopType && hopName == vm.hops[i].hopName){
        console.log('Going to remove: ', vm.hops[i]);
        vm.hops.splice(i,1);
      } else {
        //console.log('This is not the ingredient object I\'m looking for.');
      }
    }
  };

//** YEAST FUNCTIONS **/
  // addYeast() button function
  vm.addYeast = function(yeastSupplier, yeastType, rehydrate){
    // Push single yeast object into yeasts[]
    var singleYeast = {
      yeastSupplier: yeastSupplier,
      yeastType: yeastType,
      rehydrate: rehydrate,
      yeastAdded: false
    };
    // console.log("Single yeast: ", singleYeast);
    vm.yeasts.push(singleYeast);
    // console.log('yeast array: ', vm.yeasts);
    // Appends to DOM via vm.yeasts
  };

  // Remove selected yeast from the yeasts[]
  vm.deleteYeast = function(yeastType){
    //console.log('Looking to delete malt: ', yeastType);
    //console.log('Looking to remove it from: ', vm.hops);
    for(var i = 0; i < vm.yeasts.length; i++){
      if(yeastType == vm.yeasts[i].yeastType){
        console.log('Going to remove: ', vm.yeasts[i]);
        vm.yeasts.splice(i,1);
      } else {
        //console.log('This is not the ingredient object I\'m looking for.');
      }
    }
  };

//** OTHER INGREDIENTS FUNCTIONS **/
  // addIngredient() button function
  vm.addIngredient = function(ingredientType, ingredientAmt, ingredientNotes){
    // Push single yeast object into yeasts[]
    var singleIngredient = {
      ingredientType: ingredientType,
      ingredientAmt: ingredientAmt,
      ingredientNotes: ingredientNotes,
      ingredientAdded: false
    };
    //console.log("Single ingredient: ", singleIngredient);
    vm.otherIngredients.push(singleIngredient);
    //console.log('ingredients array: ', vm.otherIngredients);
    // Appends to DOM via vm.yeasts
  };

  // Remove selected yeast from the yeasts[]
  vm.deleteIngredient = function(ingredientType){
    console.log('Looking to delete malt: ', ingredientType);
    //console.log('Looking to remove it from: ', vm.hops);
    for(var i = 0; i < vm.otherIngredients.length; i++){
      if(ingredientType == vm.otherIngredients[i].ingredientType){
        console.log('Going to remove: ', vm.otherIngredients[i]);
        vm.otherIngredients.splice(i,1);
      } else {
        //console.log('This is not the ingredient object I\'m looking for.');
      }
    }
  };

//SAVE RECIPE - ON CLICK
  vm.saveRecipe = function(name, style, recipeType, procedure, batchSize, boilLength,
    mashLength, mashTemp, originalGravity, finalGravity, description, notes, recipeSrc){
    // BUILD DATA OBJECT w/ rest of data TO SEND TO SERVER
    vm.recipe = {
      username: vm.userObject.userName,
      recipeName: name,
      beerStyle: style,
      recipeType: recipeType,
      recipeDescription: description,
      procedure: procedure,
      batchSize: batchSize,
      boilLength: boilLength,
      mashLength: mashLength,
      mashTemp: mashTemp,
      originalGravity: originalGravity,
      finalGravity: finalGravity,
      recipeNotes: notes,
      recipeSrc: recipeSrc,
      batchesBrewed: 0,
      batchStatus: 'Ready to Brew',
      hops: vm.hops,
      malts: vm.malts,
      yeasts: vm.yeasts,
      otherIngredients: vm.otherIngredients
    };
    console.log("recipe data: ", vm.recipe);

    // POST /recipe to create new Recipe object on server side
    $http.post('/recipe', vm.recipe).then(function(response){
      console.log('Sending recipe to server.');
      if(response){
        console.log('The server sent something back: ', response);
      }
    });
    //GET data using recipe.service
    vm.recipeService.getAllRecipes(vm.userObject.userName);
    console.log(vm.allRecipes);

    //Pop up toast notification
    vm.recipeService.showSaveToast();

  }; //end of saveRecipe

  //GET data using recipe.service
  vm.recipeService.getAllRecipes(vm.userObject.userName);
  console.log('Recipes returned:', vm.allRecipes);

}); //end of controller
