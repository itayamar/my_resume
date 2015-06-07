'use strict';

describe('myApp module', function(){
    beforeEach(module('myApp'));
    beforeEach(module('myApp.resumeServices'));

    describe('MainController controller', function(){
        var scope, MainController, httpBackend;
        beforeEach(function(){
            this.addMatchers({
                toEqualData: function(expected) {
                    return angular.equals(this.actual, expected);
                }
            });
        });

        beforeEach(inject(function($httpBackend, $rootScope, $controller) {

            httpBackend = $httpBackend;
            httpBackend.expectGET('components/resume/itay_amar.json').
                respond({name: 'itay_amar', id: '200581668', "dateOfBirth": "14/7/1988"});

            scope = $rootScope.$new();
            MainController = $controller('MainController', {$scope: scope});
        }));

        it('should be defined', function() {
            expect(MainController).toBeDefined();
        });

        it('should create the "resume" model with the fetched data',function(){
            //it should not be defined at first
            expect (scope.resume).toBeUndefined();

            httpBackend.flush();

            expect(scope.resume).toEqualData({name: 'itay_amar', id: '200581668', "dateOfBirth": "14/7/1988"});

        });

    });

});