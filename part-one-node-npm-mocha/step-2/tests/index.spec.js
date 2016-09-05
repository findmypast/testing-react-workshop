var User = require('../src');

describe('User#save()', function() {
  it('should save without error', function(done) {
    var user = new User('Luna');
    user.save(done);
  });
});
