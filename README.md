# Node Adafruit BME280 Sensor Driver
This node module allows to read data from Adafruit BME280 temperature, humidity and pressure sensor (https://www.adafruit.com/product/2652). It was tested on Raspberry Pi 3 with sensor connected to I2C protocol.
This module uses original Adafruit_Python_GPIO libraries and python-shell node.js bridge to connect to sensor and read its data.

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
### Resources
- BME280 Home page - https://www.adafruit.com/product/2652
- BME280 Datasheet - https://cdn-shop.adafruit.com/datasheets/BST-BME280_DS001-10.pdf
- BME280 Adafruit Learn PDF - https://cdn-learn.adafruit.com/downloads/pdf/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout.pdf
