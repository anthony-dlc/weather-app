import "./style/reset.css";
import "./style/main.css";
import documentEvents from "./documentEvents.js";
import addSearchEvent from "./btnSearchFunctions/search.js";

documentEvents();

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addSearchEvent("metric");
  }
});
