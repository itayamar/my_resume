'use strict';

describe('service', function() {

    // load modules
    beforeEach(module('myApp'));

    // Test service availability
    it('check the existence of Resume factory', inject(function(Resume) {
        expect(Resume).toBeDefined();
    }));
});