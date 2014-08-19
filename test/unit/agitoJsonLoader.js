'use strict';

describe('AgitoJsonLoader', function() {

  var jsonLoader = require('../..');

  it('should throw an error if a parameter is incorrect', function() {
    var incorrectParameters = [
      undefined,
      null,
      false,
      0,
      0.0,
      'incorrect'
    ];
    var incorrectParametersAsArray = incorrectParameters.map(function(el) {
      return [el];
    });

    []
      .concat(incorrectParameters)
      .concat(incorrectParametersAsArray)
      .forEach(function(incorrectParameter) {
        expect(function() {
          jsonLoader(incorrectParameter);
        }).to.throw(TypeError, 'Incorrect argument type. Only objects and arrays of objects are supported.');
      });
  });

  it('should support to be called with an object', function(done) {
    var f = jsonLoader({ key: 'value' });
    var triggersMock = [];
    f.call({ done: done, triggers: triggersMock });

    expect(triggersMock).to.deep.equal([
      { key: 'value' }
    ]);
  });

  it('should support to be called with n objects', function(done) {
    var f = jsonLoader({ key: 'value' }, { key: 'value' });
    var triggersMock = [];
    f.call({ done: done, triggers: triggersMock });

    expect(triggersMock).to.deep.equal([
      { key: 'value' },
      { key: 'value' }
    ]);
  });

  it('should support to be called with an array of object', function(done) {
    var f = jsonLoader([
      { key: 'value' },
      { key: 'value' }
    ]);
    var triggersMock = [];
    f.call({ done: done, triggers: triggersMock });

    expect(triggersMock).to.deep.equal([
      { key: 'value' },
      { key: 'value' }
    ]);
  });

  it('should support to be called with n arrays of object', function(done) {
    var f = jsonLoader([
      { key: 'value' },
      { key: 'value' }
    ], [
      { key: 'value' },
      { key: 'value' }
    ]);
    var triggersMock = [];
    f.call({ done: done, triggers: triggersMock });

    expect(triggersMock).to.deep.equal([
      { key: 'value' },
      { key: 'value' },
      { key: 'value' },
      { key: 'value' }
    ]);
  });

  it('should support to be called with a mix between objects and arrays, and flat them all', function(done) {
    var f = jsonLoader([
      { key: 'value' },
      { key: 'value' }
    ], { key: 'value' }, { key: 'value' });
    var triggersMock = [];
    f.call({ done: done, triggers: triggersMock });

    expect(triggersMock).to.deep.equal([
      { key: 'value' },
      { key: 'value' },
      { key: 'value' },
      { key: 'value' }
    ]);
  });

});
