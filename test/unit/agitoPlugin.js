'use strict';

describe('An Agito plugin', function() {

  var jsonLoader = require('../..');

  it('should be a function', function() {
    expect(jsonLoader).to.be.a('function');
  });

  it('should return a function', function() {
    var ret = jsonLoader();

    expect(ret).to.be.a('function');
  });

  it('should call the done callback once it finishes', function(done) {
    var f = jsonLoader();

    f.call({ protocols: [], triggers: [], actions: [], done: done });
  });

});
