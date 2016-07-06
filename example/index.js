var BME280 = require('../index.js')

BME280.probe(function(temperature, pressure, humidity) {
  console.log(temperature);
  console.log(pressure);
  console.log(humidity);
});
