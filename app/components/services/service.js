angular.module('myApp.resumeServices', ['ngResource'])

.factory('Resume', ['$resource',
    function($resource){
        //return $resource('..resume/:name.json');
        return $resource('components/resume/itay_amar.json', {}, {
            'get':{method:'GET'}
        });
    }
]);

//resumeServices.factory('ResumeName',function(){
//   var resume_name=null;
//   return{
//       getResumeName:function(){
//           return resume_name;
//       },
//       //get the resume name with out the.json
//       setResumeName:function(fileName){
//           resume_name=name;
//       }
//   };
//});