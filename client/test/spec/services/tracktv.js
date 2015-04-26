'use strict';

describe('Service: tracktv', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var tracktv;
  beforeEach(inject(function (_tracktv_) {
    tracktv = _tracktv_;
  }));

  it('should do something', function () {
    expect(!!tracktv).toBe(true);
  });

});
