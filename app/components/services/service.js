angular.module('myApp.resumeServices', ['ngResource'])

.factory('Resume', ['$resource',
    function($resource){
        //return $resource('..resume/:name.json');
        return $resource('components/resume/itay_amar.json', {}, {
            'get':{method:'GET'}
        });
    }
]);
