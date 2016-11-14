// ROUTING - using ui-router //

colorful.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider){

  // disable hash bang
  $locationProvider.html5Mode(true);

  function authenticateRoute($auth, $state) {
    return $auth.validateUser().catch(function(res) {
      $state.go('login');
    });
  };

  // state routes
  $stateProvider
  .state('cover', {
    url:'/',
    template: 'COLORFUL app',
  })

  // catchall route
  $urlRouterProvider.otherwise('/');
}]);
