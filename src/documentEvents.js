import addSearchEvent from "./btnSearchFunctions/search.js";

export default function documentEvents() {
  document.addEventListener("click", (e) => {
    // FORM EVENT:
    const form = document.querySelector("form");
    if (!form.contains(e.target)) {
      form.style.outline = "none";
      return;
    }

    // INPUT EVENT:
    const input = document.querySelector("input");
    if (input.contains(e.target)) {
      form.style.outline = "1px solid #4c8dff";
      return;
    }

    const btnSearch = document.querySelector(".search-btn");
    btnSearch.addEventListener("click", addSearchEvent("metric"));
  });
}
