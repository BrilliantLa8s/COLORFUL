colorful.controller('AuthCtrl', ['$state', '$scope', '$interval', '$location', '$auth', function($state, $scope, $interval, $location, $auth){

  // if valid user exists, avoid login/register
  $auth.validateUser().then(function(resp) {
    return $state.go('main');
  });

  // login function
  $scope.login = function(creds) {
    $auth.submitLogin(creds)
    .then(function(resp) {
      $state.go('cover');
    }).catch(function(resp) {
      console.log(resp)
    });
  };

  // register function
  $scope.register = function(creds) {
    $auth.submitRegistration(creds)
    .then(function(resp) {
      $auth.submitLogin({
        email: creds.email,
        password: creds.password
      }).then(function(resp) {
        $state.go('cover');
      })
    }).catch(function(resp) {
      console.log(resp)
      $state.go("register");
    });
  };
}])
