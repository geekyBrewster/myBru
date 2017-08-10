myApp.controller('BrewController', function(UserService) {
  console.log('BrewController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  //DATA OBJECTS
  vm.recipe = {};
  vm.batch = {};

//GET RECIPE DATA FROM SERVER
  // GET REQUEST
  // APPEND DATA TO DOM
  // Figure out how to update ingredientAdded when checkbox is clicked

//SAVE BREW NOTES -- ON CLICK
  vm.saveBatch = function(date, brewNotes, mashNotes){
    // INCREMENT BATCH COUNTER IN RECIPE BY 1
    //vm.recipe.batchesBrewed += 1;
    // BUILD DATA OBJECT TO SEND TO SERVER
    vm.batch = {
      // batchID: vm.recipe.batchesBrewed,
      batchID: 1,
      batchStatus: "Batch brewed",
      brewDate: date,
      brewNotes: brewNotes,
      mashNotes: mashNotes
    };
    console.log("Batch data: ", vm.batch);

    // POST TO /brew to add batches[] to recipe{}
  };











}); //end of controller
