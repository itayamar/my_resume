'use strict';

describe('myApp.education module', function() {

  beforeEach(module('myApp.education'));

  describe('education controller', function(){
    var EducationCtrl, scope;
    it('should be defined', inject(function($controller,$rootScope) {
      //spec body
      scope=$rootScope.$new();
      EducationCtrl = $controller('EducationCtrl', {$scope: scope});
      expect(EducationCtrl).toBeDefined();
    }));

  });
});