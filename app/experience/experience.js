/**
 * Created by Itay Amar on 18/05/2015.
 */
'use strict';

angular.module('myApp.experience', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/experience', {
            templateUrl: 'experience/experience.html',
            controller: 'ExperienceCtrl'
        });
    }])
    .controller('ExperienceCtrl', ['$scope',  function($scope) {
    }]);