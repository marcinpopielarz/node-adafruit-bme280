var PythonShell = require('python-shell');

var BME280 = function() {

}

BME280.prototype.probe = function(cb) {
  PythonShell.run('python/read.py', function (err, results) {
    if (err) return done(err);
    cb.apply(this, results);
  });
};

module.exports = new BME280();
