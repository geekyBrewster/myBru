myApp.controller('RecipeController', function(UserService, RecipeService, $http) {
  console.log('RecipeController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.ingredients = ingredients;
  // console.log(vm.ingredients);
  console.log("user object: ", vm.userObject);

  //DATA CONTAINERS
  vm.malts = [];
  vm.hops = [];
  vm.yeasts = [];
  vm.otherIngredients = [];
  vm.recipe = {};

//** MALT FUNCTIONS **/
  // addMalt() button function
  vm.addMalt = function(maltType, maltName, maltAmt){
    // Push single malt object into malts[]
    var singleMalt = {
      maltType: maltType,
      maltName: maltName,
      maltAmt: maltAmt,
      maltAdded: false
    };
    // console.log("Single malt: ", singleMalt);
    vm.malts.push(singleMalt);
    // console.log('malt array: ', vm.malts);
    // Appends to DOM via vm.malts
  };

  // search function for malt name data from API
    // should use malt type to filter

//** HOP FUNCTIONS **/
  // addHop() button function
  vm.addHop = function(hopType, hopAmt, hopTime){
    // Push single hop object into hops[]
    var singleHop = {
      hopType: hopType,
      hopAmt: hopAmt,
      hopTime: hopTime,
      hopAdded: false
    };
    // console.log("Single hop: ", singleHop);
    vm.hops.push(singleHop);
    // console.log('hop array: ', vm.hops);
    // Appends to DOM via vm.hops
  };

  // search function for hop data from API

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

  // search function for yeast data from API
    // should use yeast supplier to filter

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

//SAVE RECIPE - ON CLICK
  vm.saveRecipe = function(name, style, recipeType, batchSize, boilLength, mashLength,
    originalGravity, finalGravity, description, procedure, notes, recipeSrc){
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
      originalGravity: originalGravity,
      finalGravity: finalGravity,
      recipeNotes: notes,
      recipeSrc: recipeSrc,
      batchesBrewed: 0,
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
  }; //end of saveRecipe


// GET /recipe to verify data was sent to server and saved in DB
  // var getRecipes = function(){
  //   $http.get('/recipe').then(function(response){
  //     console.log('Retrieving recipes from DB: ', response.data);
  //     allRecipes.data = response.data;
  //     console.log('All recipes: ', allRecipes);
  //   });
  // };

vm.recipeService.getAllRecipes();

}); //end of controller
