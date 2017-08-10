myApp.controller('NavController', function(UserService) {
  console.log('NavController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  var originatorEv;

  vm.openMenu = function($mdMenu, ev) {
    originatorEv = ev;
    $mdMenu.open(ev);
  };

}); //end of controller
