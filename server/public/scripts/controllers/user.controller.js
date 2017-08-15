myApp.controller('UserController', function($http, $location, $scope, $mdDialog, UserService, RecipeService, ApiDataService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.recipeService = RecipeService;
  vm.allRecipes = RecipeService.allRecipes;
  vm.apiData = ApiDataService;
  var selectedID;
  vm.batchesInProgress = [];


   //Prep New Recipe -- On click
   vm.newRecipe = function(){
     console.log('Beer styles loaded: ', vm.apiData.beerData.styles);
     //Switch to recipe.html using $location.path(/recipe)
     $location.path('/recipe');
   };

   //Load the data that needs to be displayed on the DOM
   vm.loadData = function(){
     //GET user's recipes
     vm.recipeService.getAllRecipes().then(function(response){
       console.log("Retrieving recipes: ", vm.allRecipes);

       //Display status of any batches in progress
       vm.displayBrewStatus(vm.allRecipes);

       //CALL FUNCTION TO RETRIEVE DATA FROM API
       vm.apiData.getStyles();  //want beerStyles.category.name & beerStyles.name for each object

     });
   };

     //Display recipes in progress
     vm.displayBrewStatus = function(recipes){
       console.log('Time to sort recipes!!');
       var arrayToSort = recipes;
       console.log('REcipes to sort thru: ', arrayToSort.data);

       //Step through each object
       for(var i = 0; i < arrayToSort.data.length; i++){
         var batchStatus = arrayToSort.data[i].batchStatus;
         console.log('Batch status = ', batchStatus);
         if(batchStatus !== 'Ready to Brew'){
           vm.batchesInProgress.push(arrayToSort.data[i]);
         }
       }
       console.log('Non-recipe recipes: ', vm.batchesInProgress);
     };


//BUTTON FUNCTIONS
   //Brew existing recipe -- On click
   vm.brewBatch = function(id){
     //retreive selected recipe
     vm.recipeService.getRecipeById(id);
     //Switch to brew.html
       $location.path('/brew');
   };

   //Brew existing recipe -- On click
   vm.drinkBatch = function(id){
     //retreive selected recipe
     vm.recipeService.getRecipeById(id);
     //Switch to brew.html
       $location.path('/drink');
   };

   //Delete Recipe -- on click
   vm.deleteSelectedRecipe = function(name, id, ev){
     //Confirm user wants to delete that recipe
     var confirm = $mdDialog.confirm()
       .title('Are you sure you\'d like to delete: ' + name + ' ?')
       .ok('You betcha')
       .cancel('Not right now');

     //Delete the recipe from DB
     $mdDialog.show(confirm).then(vm.recipeService.deleteRecipe(id));
     console.log('Deleted id: ', id);

     //Update DOM
     vm.recipeService.getAllRecipes();
     console.log(vm.allRecipes);
   };

vm.loadData();

//** STRETCH GOALS **//
  //Edit Recipe -- on click
    //Switch to recipeEdit.html -- Make this a simpler layout that displays recipe details
    //Get recipe data and repopulate the inputs
    //Make inputs editable
    //Allow user to save -- UPDATE route for /recipe

  //Bottle batch -- On click
    //Switch to bottle.html
    //batchStatus = "Bottling Batch"


}); //end of controller
