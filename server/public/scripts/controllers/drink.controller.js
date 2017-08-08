myApp.controller('DrinkController', function(UserService, $scope) {
  console.log('DrinkController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  $scope.offFlavors = {
    flavor: 'flavorBad',
    description: 'someDescription'
  };




});
