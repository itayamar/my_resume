'use strict';

// Declare app level module which depends on views, and components
var myApp=angular.module('myApp', [
  'ngRoute',
  'myApp.personal_details',
  'myApp.education',
  'myApp.experience',
  'myApp.resumeServices',
  //'myApp.directive',
  //'myApp.version'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/personal_details'});
    //$locationProvider.html5Mode(true);
}]);


myApp.controller('MainController',['$scope','$log', '$location' ,'Resume', function($scope ,$log, $location ,Resume){
  Resume.get().$promise.then(function(result){
        $scope.resume=result;
      },
      function(err) {
        $log.error(err);
      }
  );
    $scope.pages=[
        {path:  '/personal_details', title: 'About'},
        {path: '/education', title: 'Education'},
        {path: '/experience', title: 'Experience'}
    ];

    $scope.isActive=function(page){
        if (page.path == $location.path()) {
            return true;
        }
        return false;
    };
}]);

myApp.directive('nameResume',[
    function(){
        return {
            restrict: 'AE',
            template: '<h1 id="user-name">{{resume.name}} resume </h1>'
        };
    }
]);