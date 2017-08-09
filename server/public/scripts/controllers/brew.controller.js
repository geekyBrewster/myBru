myApp.controller('BrewController', function(UserService) {
  console.log('BrewController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

//GET RECIPE DATA FROM SERVER
  // GET REQUEST
  // APPEND DATA TO DOM

//SAVE BREW NOTES -- ON CLICK
  // POST REQUEST TO /brew INITIALIZE batches[] in recipe -- use batchID = 1 and batchStatus = "Brewing"
  // BUILD DATA OBJECT TO SEND TO SERVER
  // POST REQUEST TO /brew/update to update batches[]










}); //end of controller
