from Adafruit_BME280 import *

sensor = BME280(mode=BME280_OSAMPLE_8)
print sensor.read_humidity()
