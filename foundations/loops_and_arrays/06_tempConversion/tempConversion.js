const convertToCelsius = function (fahrenheit) {
  const convertion = (fahrenheit - 32) * (5 / 9);
  return Number(convertion.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  const convertion = celsius * (9 / 5) + 32;
  return Number(convertion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
