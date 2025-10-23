const convertToCelsius = function(temperature) {
  const celcius = (temperature - 32) * (5/9);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = temperature * (9/5) + 32;
  return Math.round(fahrenheit * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
