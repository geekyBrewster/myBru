myApp.controller('DrinkController', function(UserService, $scope, $mdDialog) {
  console.log('DrinkController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.view = "views/partials/defaultImage.html";

  vm.offFlavors = offFlavorsDB;
  // console.log("Off flavors db: ", vm.offFlavors);
  vm.offFlavorDescription = "";
  vm.offFlavorArray = [];

//** OFF FLAVORS INPUT FUNCTIONS **//
  //Open menu function
  var originatorEv;
  vm.openMenu = function($mdMenu, ev) {
    originatorEv = ev;
    $mdMenu.open(ev);
  };

  //LOADS DATA INTO OFF FLAVORS PULLDOWN MENU
    $scope.offFlavors = vm.offFlavors;

  //SHOWS DECRIPTION FOR THE SELECTED OFF FLAVOR
  vm.showDescription = function(flavor, description) {
    var confirm = $mdDialog.confirm()
      .targetEvent(originatorEv)
      .clickOutsideToClose(true)
      .parent('body')
      .title('Off Flavor Description')
      .textContent(description)
      .ok('Add to Off Flavor List');

    $mdDialog.show(confirm).then( function(){
      addOffFlavor(flavor, description);
    });
    originatorEv = null;
  };

  //ADD OFF FLAVOR -- ON CLICK
  addOffFlavor = function(flavor, description){
    //ADDS SINGLE OFF FLAVOR TO OFF FLAVORS[]
    var singleFlavor = {
      offFlavorName: flavor,
      offFlavorDescription: description
    };
    console.log("Flavor to add: ", singleFlavor);
    vm.offFlavorArray.push(singleFlavor);
    //APPENDS TO DOM via offFlavorArray
  };


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
  //BUILD DATA OBJECT TO SEND TO SERVER
  //POST TO /drink to add drink[] to recipe{}






}); //END OF CONTROLLER
