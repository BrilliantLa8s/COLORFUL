//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require angular-aria/angular-aria
//= require angular-animate/angular-animate
//= require angular-material/angular-material
//= require angular-rails-templates
//= require angular-ui-router/release/angular-ui-router
//= require angular-cookie/angular-cookie
//= require ng-token-auth/dist/ng-token-auth
//= require_self
//= require_tree ../templates
//= require_tree .

angular.module('colorful', [
  'templates',
  'ui.router',
  'ngMaterial',
  'ng-token-auth'
]);

const colorful = angular.module('colorful');

colorful.run(['$rootScope', '$state', function($rootScope, $state){
  $rootScope.$state = $state;
}]);
