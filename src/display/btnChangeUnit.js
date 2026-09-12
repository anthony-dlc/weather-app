function convertToCelsius() {
  const currentWeather = document.querySelector(".current-weather");
  const maxTemp = document.querySelector(".tem-max");
  const minTemp = document.querySelector(".temp-min");
  currentWeather.textContent = fahrenheitToCelsius(currentWeather.textContent);
  maxTemp.textContent = fahrenheitToCelsius(maxTemp.textContent);
  minTemp.textContent = fahrenheitToCelsius(minTemp.textContent);
}

function convertToFahrenheit() {
  const currentWeather = document.querySelector(".current-weather");
  const maxTemp = document.querySelector(".tem-max");
  const minTemp = document.querySelector(".temp-min");
  currentWeather.textContent = celsiusToFahrenheit(currentWeather.textContent);
  maxTemp.textContent = celsiusToFahrenheit(maxTemp.textContent);
  minTemp.textContent = celsiusToFahrenheit(minTemp.textContent);
}

function celsiusToFahrenheit(e) {
  const unit = e * (9 / 5) + 32;
  if (unit.toString().includes(".")) {
    return unit.toFixed("1");
  }
  return unit;
}

function fahrenheitToCelsius(e) {
  const unit = (e - 32) * (5 / 9);
  if (unit.toString().includes(".")) {
    return unit.toFixed("1");
  }
  return unit;
}

// 	(0 °C × 9/5) + 32 = 32 °F
// 	(32 °F − 32) × 5/9 = 0 °C

export { convertToCelsius, convertToFahrenheit };
