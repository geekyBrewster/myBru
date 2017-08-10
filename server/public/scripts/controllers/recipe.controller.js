myApp.controller('RecipeController', function(UserService) {
  console.log('RecipeController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.ingredients = ingredients;
  // console.log(vm.ingredients);
  vm.malts = [];
  vm.hops = [];
  vm.yeasts = [];
  vm.otherIngredients = [];


//** MALT FUNCTIONS **/
  // addMalt() button function
  vm.addMalt = function(maltType, maltName, maltAmt){
    // Push single malt object into malts[]
    var singleMalt = {
      maltType: maltType,
      maltName: maltName,
      maltAmt: maltAmt
    };
    console.log("Single malt: ", singleMalt);
    vm.malts.push(singleMalt);
    console.log('malt array: ', vm.malts);
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
      hopTime: hopTime
    };
    console.log("Single hop: ", singleHop);
    vm.hops.push(singleHop);
    console.log('hop array: ', vm.hops);
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
      rehydrate: rehydrate
    };
    console.log("Single yeast: ", singleYeast);
    vm.yeasts.push(singleYeast);
    console.log('yeast array: ', vm.yeasts);
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
      ingredientNotes: ingredientNotes
    };
    console.log("Single ingredient: ", singleIngredient);
    vm.otherIngredients.push(singleIngredient);
    console.log('ingredients array: ', vm.otherIngredients);
    // Appends to DOM via vm.yeasts
  };


//SAVE RECIPE - ON CLICK
  //Initial POST /recipe to create new Recipe object using username, recipeName on server side
  // BUILD DATA OBJECT w/ rest of data TO SEND TO SERVER
  // POST REQUEST TO /recipe/update to add rest of data to the Recipe in


}); //end of controller
