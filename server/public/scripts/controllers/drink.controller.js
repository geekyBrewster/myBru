myApp.controller('DrinkController', function(UserService, RecipeService, $scope, $mdDialog) {
  console.log('DrinkController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;

  //DATA OBJECTS
  vm.recipe = {};
  // vm.batch = recipe.batch;
  vm.finalProduct = {};

  vm.view = "views/partials/defaultImage.html";
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

  //Open menu function
    var originatorEv;
    vm.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

//** OFF FLAVORS INPUT FUNCTIONS **//
  vm.offFlavors = offFlavorsDB;
  // console.log("Off flavors db: ", vm.offFlavors);
  vm.offFlavorDescription = "";
  vm.offFlavorArray = [];

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

//SAVE FINAL PRODUCT NOTES -- ON CLICK
  vm.saveFinalProduct = function(date, rank, worthRepeating, impressions,
    batchChanges, aroma, appearance, flavor, mouthfeel, batchNotes, suspectedCauses){
    //BUILD DATA OBJECT TO SEND TO SERVER
    vm.finalProduct = {
      // fromBatchID: vm.batch.batchID,
      fromBatchID: 1,
      drinkDate: date,
      batchRank: rank,
      worthRepeating: worthRepeating,
      batchChanges: batchChanges,
      aroma: aroma,
      appearance: appearance,
      flavor: flavor,
      mouthfeel: mouthfeel,
      batchImpressions: impressions,
      batchNote: batchNotes,
      offFlavors: vm.offFlavorArray,
      suspectedCauses: suspectedCauses
    };
    console.log('Drink data obj: ', vm.finalProduct);
    //POST TO /drink to add drink[] to recipe{}
  };







}); //END OF CONTROLLER
