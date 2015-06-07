/**
 * Created by Itay Amar on 18/05/2015.
 */
'use strict';

describe('myApp.experience module', function() {

    beforeEach(module('myApp.experience'));

    describe('experience controller', function(){
        var ExperienceCtrl, scope;
        it('should be defined', inject(function($controller,$rootScope) {
            scope=$rootScope.$new();
            ExperienceCtrl = $controller('ExperienceCtrl', {$scope: scope});
            expect(ExperienceCtrl).toBeDefined();
        }));

    });
});
