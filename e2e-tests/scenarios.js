'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /personal_details when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/personal_details");
  });


  describe('personal_details', function() {

    beforeEach(function() {
      browser.get('index.html#/personal_details');
    });


    it('should render personal_details when user navigates to /personal_details', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('education', function() {

    beforeEach(function() {
      browser.get('index.html#/education');
    });


    it('should render education when user navigates to /education', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
