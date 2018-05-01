const input = [
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q'
];
const output = [
  'n', 'j', 'e', 'a',
  'o', 'k', 'f', 'b',
  'p', 'l', 'g', 'c',
  'q', 'm', 'h', 'd'
];
const assert = require('assert');
const rotate = require('./rotate');

describe('rotate()', function () {
  it('Should rotate the matrix', function () {
    assert.deepEqual(rotate(input), output);
  });
});