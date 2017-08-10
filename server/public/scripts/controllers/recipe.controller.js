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
  // addMalt(maltType, maltName, maltAmt)
  vm.addMalt = function(maltType, maltName, maltAmt){
    var singleMalt = {
      maltType: maltType,
      maltName: maltName,
      maltAmt: maltAmt
    };
    console.log("Single malt: ", singleMalt);
    vm.malts.push(singleMalt);
    console.log('malt array: ', vm.malts);
  };
    // Push single malt object into malts[]
    // Append to DOM

  // Malt Type dropdown menu
    // Create data object for the pulldown menu

  // search function for malt name data from API
    // should use malt type to filter

//** HOP FUNCTIONS **/
  // addHop()
    // Push single hop object into hops[]
    // Append to DOM

  // search function for hop data from API

//** YEAST FUNCTIONS **/
  // addYeast()
    // Push single yeast object into yeasts[]
    // Append to DOM

  // Yeast Supplier dropdown menu
    // Create data object for the pulldown menu

  // search function for yeast data from API
    // should use yeast supplier to filter

//** OTHER INGREDIENTS FUNCTIONS **/
  // addIngredient()
    // Push single ingredient object into otherIngredients[]
    // Append to DOM


//SAVE RECIPE - ON CLICK
  //Initial POST /recipe to create new Recipe object using username, recipeName on server side
  // BUILD DATA OBJECT w/ rest of data TO SEND TO SERVER
  // POST REQUEST TO /recipe/update to add rest of data to the Recipe in


}); //end of controller
