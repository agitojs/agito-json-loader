'use strict';

var _ = require('lodash');

var agitoJsonLoader = function() {

  var args = Array.prototype.slice.call(arguments);
  var triggers;

  if (!areArgumentsValid(args)) {
    throw new TypeError('Incorrect argument type. Only objects and arrays of ' +
                        'objects are supported.');
  }

  triggers = _.flatten(args);

  return function() {
    Array.prototype.push.apply(this.triggers, triggers);

    return this.done();
  };

};

/**
 * Check if the passed arguments are valid. As long as arrays are encountered,
 * they are recursively checked.
 *
 * @param {*[]} args - The arguments to check
 *
 * @return {Boolean} - true when the arguments are correct, otherwise false
 */
function areArgumentsValid(args) {

  var isValid = args.every(function(arg) {
    if (Array.isArray(arg)) {
      return areArgumentsValid(arg);
    }
    return (arg !== null && typeof arg === 'object');
  });

  return isValid;

}

module.exports = agitoJsonLoader;
