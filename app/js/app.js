'use strict';

// Declare app level module which depends on views, and components
angular.module('sgcclientApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/contaduria/premiosalcobro',{
        templateUrl :'views/contaduria/premiosAlCobro/abm.html',
        controller: 'premiosAlCobroCtrl'
      });
  $routeProvider.otherwise({redirectTo:'/'});
}]);

sgcclientApp.controller('premiosAlCobroCtrl',function($scope){
  $scope.message='Premios al cobro';
});
