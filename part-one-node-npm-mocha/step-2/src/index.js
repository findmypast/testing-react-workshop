var SimpleMath = require('simple-math');

module.exports = {
  add: SimpleMath.add,
  subtract: SimpleMath.subtract,
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};
