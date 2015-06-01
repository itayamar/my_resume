/**
 * Created by Itay Amar on 31/05/2015.
 */

angular.module('myApp.resumeDirectives',[])
.directive('nameResume',[
    function(){
        return {
           restrict: 'AE',
            template: '<h1 id="user-name">{{resume.name}} resume </h1>'
        };
    }
]);
