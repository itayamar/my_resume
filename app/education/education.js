'use strict';

angular.module('myApp.education', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/education', {
    templateUrl: 'education/education.html',
    controller: 'EducationCtrl'
  });
}])

.controller('EducationCtrl', ['$scope', 'Resume', function($scope,Resume) {
      Resume.get().$promise.then(function(result){
            $scope.resume=result;
          },
          function(err) {
            $log.error(err);
          }
      );
}]);