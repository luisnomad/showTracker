'use strict';

describe('Service: tractvAuth', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var tractvAuth;
  beforeEach(inject(function (_tractvAuth_) {
    tractvAuth = _tractvAuth_;
  }));

  it('should do something', function () {
    expect(!!tractvAuth).toBe(true);
  });

});
