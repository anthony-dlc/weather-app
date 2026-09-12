import { verifyEmptyValue } from "../verify.js";
import getWeather from "../console/getWeather.js";
import weatherCard from "../display/showWeather.js";
import alerts from "../display/alerts.js";
import contentEvents from "../containerEvents.js";

export default function addSearchEvent(unit) {
  const input = document.querySelector("input");
  const verifyInput = verifyEmptyValue(input.value);
  const container = document.querySelector(".content");
  const loader = document.querySelector(".loader-container");
  container.innerHTML = "";
  if (verifyInput) {
    loader.innerHTML = `<div class="loader"></div>`;
    getWeather(input.value, unit).then(
      (result) => {
        input.value = "";
        loader.innerHTML = "";
        container.append(weatherCard(result));
        contentEvents();
        alerts(result);
      },
      () => {
        input.value = "";
        loader.innerHTML = "";
        alert("Write a correct country or city!");
      },
    );
    return;
  }
  alert("Write a city, country or both!");
  return;
}
