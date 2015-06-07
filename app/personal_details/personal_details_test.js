'use strict';

describe('myApp.personal_details module', function() {

  beforeEach(module('myApp.personal_details'));

  describe('personal_details controller', function(){
    var Personal_detailsCtrl,scope;
    it('should be defined', inject(function($controller, $rootScope) {
      //spec body
      scope=$rootScope.$new();
      Personal_detailsCtrl = $controller('Personal_detailsCtrl',{$scope: scope});
      expect(Personal_detailsCtrl).toBeDefined();
    }));

  });
});