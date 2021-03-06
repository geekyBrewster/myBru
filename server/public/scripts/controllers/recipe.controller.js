myApp.controller('RecipeController', function($http, $location, $scope, $mdToast, $mdDialog, UserService, RecipeService, ApiDataService) {

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

  //-------- CONSTRUCT BEER STYLES PULLDOWN DATA -------//
  vm.beerData = ApiDataService.beerData;
  //console.log('Beer styles accessible from recipe.html: ', vm.beerData);
  vm.beerCategories = [];
  vm.filteredStyles = [];
  var id = 1;
  var category = {};
  var beerStyle = {};
  var beerStyleObj = {};

  function buildBeerCategories(){
    //CALL FUNCTION TO RETRIEVE DATA FROM API
    vm.apiService.getStyles()
    .then(
      function(){
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
      }
    );
    console.log('beer categories data: ', vm.beerCategories);
  }
  buildBeerCategories();

  vm.filteredBeerStyles = function(categoryName){
    console.log('Category to filter by: ', categoryName);
    //for each category.name that matches push it into filteredBeerStyles[]
    vm.filteredStyles = []; //empty array so filtered names don't append to previous search results
    //Step through the array of Objects
    for(var i = 0; i < vm.beerData.styles.length; i++){
      if(categoryName == vm.beerData.styles[i].category.name){
        //If nothing in array for index number, push name object into categories[]
        beerStyle = {}; //clear beerStyle object
        beerStyle.name = vm.beerData.styles[i].name;
        //console.log("Adding this beer style object to array: ", beerStyle);
        vm.filteredStyles.push(beerStyle);
        //increment id finder up one to search for next category id-name pair
        id += 1;
      } else {
        //ignore styles that don't match the category
        //console.log("This style doesn't fit the category");
      }
    }
    console.log('beer categories data: ', vm.filteredStyles);
  };
  //Build beerStyle Data Object to save with Recipe
  vm.saveBeerStyle = function(category, beerStyle){
    console.log('Beer category to save: ', category);
    console.log('Beer style name to save: ', name);
    beerStyleObj = {
      beerCategory: category,
      styleName: beerStyle.name,
    };
    console.log('Beer style object to save to recipe: ', beerStyleObj);
  };

  //---------- INGREDIENT FUNCTIONS -----------//
  //DATA CONTAINERS FOR STORAGE OF USER ENTERED VALUES
  vm.malts = [];
  vm.hops = [];
  vm.yeasts = [];
  vm.otherIngredients = [];

  //** MALT FUNCTIONS **/
  // addMalt() button function
  vm.addMalt = function(maltType, maltName, maltAmtLbs, maltAmtOz, maltForm, ev){

    //Validation - to add content in place of null entries
    if(maltAmtLbs == null || maltAmtLbs == ""){
      maltAmtLbs = 0;
      console.log('Setting maltAmtLbs to: ', maltAmtLbs);
    } else {
      maltAmtLbs = maltAmtLbs;
      console.log('Setting maltAmtLbs to: ', maltAmtLbs);
    }

    if(maltAmtOz == null || maltAmtOz == ""){
      maltAmtOz = 0;
      console.log('Setting maltAmtOz to: ', maltAmtOz);
    } else {
      maltAmtOz = maltAmtOz;
      console.log('Setting maltAmtOz to: ', maltAmtOz);
    }

    // Create single malt object, then push into malts[]
    var singleMalt = {
      maltType: maltType,
      maltName: maltName,
      maltAmtLbs: maltAmtLbs,
      maltAmtOz: maltAmtOz,
      maltAdded: false
    };
    // console.log("Single malt: ", singleMalt);
    vm.malts.push(singleMalt);
    //console.log('malt array after add: ', vm.malts);

    //Reset the maltForm after adding a malt
    vm.maltName = "";
    vm.maltType = "";
    vm.maltAmtLbs = "";
    vm.maltAmtOz = "";
    vm.maltForm.$setPristine();
    vm.maltForm.$setUntouched();

  }; //end of add Malt

  // Remove selected malt from the malts[]
  vm.deleteMalt = function(maltName){
    //console.log('Looking to delete malt: ', maltName);
    //console.log('Looking to remove it from: ', vm.malts);
    for(var i = 0; i < vm.malts.length; i++){
      if(maltName == vm.malts[i].maltName){
        console.log('Going to remove: ', vm.malts[i]);
        vm.malts.splice(i,1);
      } else {
        console.log('This is not the ingredient object I\'m looking for.');
      }
    }
  };

  vm.updateMalt = function(){
    console.log('malt array after update: ', vm.malts);
  };

  //** HOP FUNCTIONS **/
  // addHop() button function
  vm.addHop = function(hopType, hopName, hopUse, hopAmt, hopTimeBrew, hopTimeDry){

    //Validation - to add content in place of null entries
    if(hopTimeDry == null || hopTimeDry == ""){
      hopTimeDry = "N/A";
      console.log('Setting hopTimeDry to: ', hopTimeDry);
    } else {
      hopTimeDry = hopTimeDry;
      console.log('Setting hopTimeDry to: ', hopTimeDry);
    }

    if(hopTimeBrew == null || hopTimeBrew == "" ){
      hopTimeBrew = 0;
      console.log('Setting maltAmtOz to: ', hopTimeBrew);
    } else {
      hopTimeBrew = hopTimeBrew;
      console.log('Setting maltAmtOz to: ', hopTimeBrew);
    }

    if(hopType == "Select"){
      hopType = "";
    } else {
      hopType = hopType;
    }

    // Push single hop object into hops[]
    var singleHop = {
      hopType: hopType,
      hopName: hopName,
      hopAmt: hopAmt,
      hopUse: hopUse,
      hopTimeBrew: hopTimeBrew,
      hopTimeDry: hopTimeDry,
      hopAdded: false
    };
    // console.log("Single hop: ", singleHop);
    vm.hops.push(singleHop);
    // console.log('hop array: ', vm.hops);

    //Reset the hopForm after adding a hop
    vm.hopType = "Select";
    vm.hopName = "";
    vm.hopAmt = "";
    vm.hopUse = "";
    vm.hopTimeBrew = "";
    vm.hopTimeDry = "";
    vm.hopForm.$setPristine();
    vm.hopForm.$setUntouched();

  };

  // Remove selected hop from the hops[]
  vm.deleteHop = function(hopType, hopName){
    //console.log('Looking to delete hop: ', hopName);
    //console.log('Looking to remove it from: ', vm.hops);
    for(var i = 0; i < vm.hops.length; i++){
      if(hopType == vm.hops[i].hopType || hopName == vm.hops[i].hopName){
        console.log('Going to remove: ', vm.hops[i]);
        vm.hops.splice(i,1);
      } else {
        //console.log('This is not the ingredient object I\'m looking for.');
      }
    }
  };

  vm.updateHop = function(){
    console.log('malt array after update: ', vm.hops);
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

    //Reset the yeastForm after adding a yeast
    vm.yeastType = "";
    vm.yeastSupplier = "Select";
    vm.rehydrate = "";
    vm.yeastForm.$setPristine();
    vm.yeastForm.$setUntouched();

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

  vm.updateYeast = function(){
    console.log('malt array after update: ', vm.yeasts);
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

    //Reset the ingredientForm after adding a ingredient
    vm.ingredientType = "";
    vm.ingredientAmt = "";
    vm.ingredientNotes = "";
    vm.ingredientForm.$setPristine();
    vm.ingredientForm.$setUntouched();
  };

  // Remove selected yeast from the yeasts[]
  vm.deleteIngredient = function(ingredientType){
    console.log('Looking to delete ingredient: ', ingredientType);
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

  vm.updateIngredient = function(){
    console.log('malt array after update: ', vm.otherIngredients);
  };

  //---------- BUTTON FUNCTIONS -----------//

  //SAVE RECIPE - ON CLICK
  vm.saveRecipe = function(name, recipeType, procedure, batchSize, boilLength,
    mashLength, mashTemp, originalGravity, finalGravity, description, notes, recipeSrc, ev){

      //Valdiation -- Ensuring key ingredients have been added, mainly malts, hops & yeast
      if(vm.malts.length == 0 || vm.hops.length == 0 || vm.yeasts.length == 0 ){
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Don\'t save yet!')
            .textContent('You haven\'t entered all your ingredients yet. You\'re not making beer unless you have malts, hops, yeast, and water.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
        );
      } else {

        // BUILD DATA OBJECT w/ rest of data TO SEND TO SERVER
        vm.recipe = {
          username: vm.userObject.userName,
          recipeName: name,
          beerStyle: beerStyleObj,
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
        //console.log('Getting recipes after save: ', vm.allRecipes);

        //Pop up toast notification
        vm.recipeService.showSaveNotification(ev, 'Recipe');

      } //end of if-else for validation

    }; //end of saveRecipe

    //GET ALL RECIPE DATA
    vm.recipeService.getAllRecipes(vm.userObject.userName);
    console.log('Recipes returned:', vm.allRecipes);

}); //end of controller
