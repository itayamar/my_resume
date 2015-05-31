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
    .controller('ExperienceCtrl', ['$scope', 'Resume', function($scope,Resume) {
        Resume.get().$promise.then(function(result){
                $scope.resume=result;
            },
            function(err) {
                $log.error(err);
            }
        );
    }]);