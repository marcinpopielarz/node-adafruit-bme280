var BME280 = require('./lib/bme280.js')

BME280.probe(function(temperature, pressure, humidity) {
  console.log(temperature);
  console.log(pressure);
  console.log(humidity);
});
