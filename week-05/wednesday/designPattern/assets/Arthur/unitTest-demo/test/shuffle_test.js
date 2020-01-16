const shuffle = require('../helpers/shuffle.js');
const assert = require('assert');
const expect = require("chai").expect;

describe('shuffle_result', function () {
  it('Array should not equal to the one after shuffled', function () {
    assert.notEqual(shuffle([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
});

describe('shuffle_result_length', function () {
  it('length should equal to the one after shuffled', function () {
    assert.equal(shuffle([1, 2, 3, 4]).length, 4);
  });
});

describe('shuffle_result_type', function () {
  it('Type should be a number', function () {
    expect(shuffle([1, 2, 3, 4]).indexOf(2)).is.a(typeof ([1, 2, 3, 4].indexOf(2)));
  });
});
