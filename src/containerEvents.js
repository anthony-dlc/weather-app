import {
  convertToCelsius,
  convertToFahrenheit,
} from "./display/btnChangeUnit.js";

export default function contentEvents() {
  const container = document.querySelector(".content");

  container.addEventListener("click", (e) => {
    const celsiusBtn = e.target.closest(".celsius-btn");
    const fahrenheitBtn = e.target.closest(".fahrenheit-btn");

    if (celsiusBtn) {
      if (!celsiusBtn.classList.contains("btn-clicked")) {
        celsiusBtn.classList.toggle("btn-clicked");
        convertToCelsius();
        const fBtn = document.querySelector(".fahrenheit-btn");
        if (fBtn.classList.contains("btn-clicked")) {
          fBtn.classList.toggle("btn-clicked");
          return;
        }
        return;
      }
      return;
    }

    if (fahrenheitBtn) {
      if (!fahrenheitBtn.classList.contains("btn-clicked")) {
        convertToFahrenheit();
        fahrenheitBtn.classList.toggle("btn-clicked");
        const cBtn = document.querySelector(".celsius-btn");
        if (cBtn.classList.contains("btn-clicked")) {
          cBtn.classList.toggle("btn-clicked");
          return;
        }
        return;
      }
      return;
    }
  });
}
