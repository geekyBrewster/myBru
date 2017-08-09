myApp.controller('DrinkController', function(UserService, $scope) {
  console.log('DrinkController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.view = "views/partials/defaultImage.html";

//** OFF FLAVORS INPUT FUNCTIONS **//
  //LOADS DATA INTO OFF FLAVORS PULLDOWN MENU
    $scope.offFlavors = {
      flavor: 'flavorBad',
      description: 'someDescription'
    };

  //ADD OFF FLAVOR -- ON CLICK
    //ADDS SINGLE OFF FLAVOR TO OFF FLAVORS[]
    //APPENDS TO DOM

//TOGGLES NOTES FIELD DEPENDING ON RATING OF BEER
  vm.toggleNotes = function(value){
    if(!value){
      vm.view = "views/partials/badBeer.html";
      console.log('Switching to bad notes');
    } else {
      vm.view = "views/partials/goodBeer.html";
      console.log('Switching to good notes');
    }
  };

//SAVE FINAL PRODUCT NOTES -- ON CLICK
  //POST REQUEST TO /drink INITIALIZE finalBrew[] in recipe -- use fromBatchID = batchID and drinkDate (use default Date.now)
  //BUILD DATA OBJECT TO SEND TO SERVER
  //POST REQUEST TO /drink/update






}); //END OF CONTROLLER
