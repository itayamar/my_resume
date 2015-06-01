'use strict';

angular.module('myApp.personal_details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personal_details', {
    templateUrl: 'personal_details/personal_details.html',
    controller: 'Personal_detailsCtrl'
  });
}])
    
    .controller('Personal_detailsCtrl', ['$scope', function($scope) {
    }]);