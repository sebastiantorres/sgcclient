'use strict';

// Declare app level module which depends on views, and components
angular.module('sgcclientApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login',{templateUrl :'partials/login.html'});
  $routeProvider.otherwise({redirectTo:'/'});
}]);

function MainCtrl($scope){
  
}
