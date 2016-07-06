var PythonShell = require('python-shell');

var BME280 = function() {

}

BME280.prototype.probe = function(cb) {
  PythonShell.run('read.py', { scriptPath: __dirname+'/python' }, function (err, results) {
    if (err) throw err;
    cb.apply(this, results);
  });
};

module.exports = new BME280();
