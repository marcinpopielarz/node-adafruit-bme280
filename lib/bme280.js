var PythonShell = require('python-shell');

var BME280 = function() {}

BME280.prototype.temperature = function() {
  PythonShell.run('python/temperature.py', function (err, results) {
    if (err) throw err;
    return results;
  });
};

BME280.prototype.pressure = function() {
  PythonShell.run('python/pressure.py', function (err, results) {
    if (err) throw err;
    return results;
  });
};

BME280.prototype.humidity = function() {
  PythonShell.run('python/humidity.py', function (err, results) {
    if (err) throw err;
    return results;
  });
};

module.exports = new BME280();
