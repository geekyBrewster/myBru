myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  //Prep New Recipe -- On click
    //Switch to recipe.html
    //Create new Recipe object with username, batchID = 1, batchStatus = "Prep Recipe"

  //Brew existing recipe -- On click
    //Switch to brew.html
    //Confirm batchID = 1 if no other IDs exist; otherwise increment ID by 1
    //batchStatus = "Brewing Batch"

//** STRETCH GOALS **//
  //Edit Recipe -- on click
    //Switch to recipeEdit.html -- Make this a simpler layout that displays recipe details
    //Get recipe data and repopulate the inputs
    //Make inputs editable
    //Allow user to save -- UPDATE route for /recipe

  //Delete Recipe -- on click
    //Confirm user wants to delete that recipe
    //Create DELETE route to use recipe _id to delete that recipe

  //Bottle batch -- On click
    //Switch to bottle.html
    //batchStatus = "Bottling Batch"

  //Drink batch -- On click
    //Switch to drink.html
    //batchStatus = "Drinking Batch"


});
