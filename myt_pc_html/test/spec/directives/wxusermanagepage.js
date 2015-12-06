'use strict';

describe('Directive: wxUserManagePage', function () {

  // load the directive's module
  beforeEach(module('mytPcHtmlApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wx-user-manage-page></wx-user-manage-page>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wxUserManagePage directive');
  }));
});