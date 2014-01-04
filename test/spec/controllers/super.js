'use strict';

describe('Controller: SuperCtrl', function () {

  // load the controller's module
  beforeEach(module('myWebsiteApp'));

  var SuperCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuperCtrl = $controller('SuperCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
