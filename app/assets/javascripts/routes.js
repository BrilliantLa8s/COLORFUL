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
    template: 'COLORFUL app {{user}}',
  })
  .state('login', {
    url:'/login',
    templateUrl: 'login.html'
  })
  .state('register', {
    url:'/register',
    templateUrl: 'register.html'
  })
  .state('logout', {
    url:'/logout',
    templateProvider: function($auth, $state) {
      $auth.signOut()
        .then(function(resp) {
          $state.go('cover')
        }).catch(function(resp) {});
    }
  });

  // catchall route
  $urlRouterProvider.otherwise('/');
}]);
