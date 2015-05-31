'use strict';
//A service
angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directives'
])

.value('version', '0.1');
