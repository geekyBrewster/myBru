myApp.controller('MaterialController', function(){
  console.log('MaterialController loaded.');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;


}); //end of controller
