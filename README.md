# node-adafruit-bme280

## Prerequisites
- It uses https://github.com/adafruit/Adafruit_Python_GPIO. Install this package first.

## Installation
```
npm --save install node-adafruit-bme280
```

## Usage
```
var BME280 = require('node-adafruit-bme280')

BME280.probe(function(temperature, pressure, humidity) {
  console.log(temperature);
  console.log(pressure);
  console.log(humidity);
});

```
