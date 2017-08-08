myApp.controller('DrinkController', function(UserService, $scope) {
  console.log('DrinkController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.view = "views/partials/defaultImage.html";

  $scope.offFlavors = {
    flavor: 'flavorBad',
    description: 'someDescription'
  };

vm.toggleNotes = function(value){
  if(!value){
    vm.view = "views/partials/badBeer.html";
    console.log('Switching to bad notes');
  } else {
    vm.view = "views/partials/goodBeer.html";
    console.log('Switching to good notes');
  }
};


});
