myApp.controller('RecipeController', function(UserService) {
  console.log('RecipeController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;


//** MALT FUNCTIONS **/
  // addMalt(maltType, maltName, maltAmt)
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
  //Create new Recipe object with username, batchID = 1, batchStatus = "Prepping Recipe"
  //BUILD DATA OBJECT TO SEND TO SERVER
  // POST REQUEST TO /Recipe


}); //end of controller
