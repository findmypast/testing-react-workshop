// index.spec.js
var ExtendedMath = require('./index');

describe('When dividing 4 by 5', function() {
  var result;

  before(function() {
    result = ExtendedMath.divide(4, 5);
  });

  it('should give me 0.8', function() {
    result.should.equal(0.8);
  });
});

describe('When multiplying 3 by 2', function() {
  var result;

  before(function() {
    result = ExtendedMath.multiply(3, 2);
  });

  it('should give me 6', function() {
    result.should.equal(6);
  });
});
