myApp.controller('DrinkController', function($http, $location, UserService, RecipeService, $scope, $mdDialog) {
  console.log('DrinkController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;
  vm.recipe = RecipeService.selectedRecipe;

  //DATA OBJECTS
  vm.finalProduct = {};
  vm.view = "views/partials/defaultImage.html";

  //GET RECIPE DATA FROM SERVER
  // GET REQUEST FOR SINGLE RECIPE
  vm.recipeService.loadRecipe();

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

    //GET RECIPE ID
      console.log('Recipe to work with: ', vm.recipe);
      console.log('RecipeId to save: ', vm.recipe.data._id);
      var recipeID = vm.recipe.data._id;

    //BUILD DATA OBJECT TO SEND TO SERVER
      vm.finalProduct = {
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

      var dataToUpdate = {
        batchStatus: 'Batch Evaluated',
        finalBrew: vm.finalProduct
      };
      console.log("Final Brew data: ", dataToUpdate);
      //PUT TO /drink to update drink[] to recipe{}


      // POST TO /brew to add batches[] to recipe{}
      $http.put('/drink/' + recipeID , dataToUpdate).then(function(response){
        console.log('Sending drink notes to server.');
        if(response){
          console.log('The /drink server sent something back: ', response);
        }
      });

      //GET data using recipe.service
      vm.recipeService.getAllRecipes();
      console.log('After updating: ', vm.allRecipes);

      //Pop up toast notification
      vm.recipeService.showSaveToast();
    };



  }); //END OF CONTROLLER
