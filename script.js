import tabs from "./modules/tabs.js";
import modal from "./modules/modal.js";
import timer from "./modules/timer.js";
import cards from "./modules/cards.js";
import calc from "./modules/calc.js";
import forms from "./modules/forms.js";
import slider from "./modules/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  tabs(".tabheader__item", ".tabcontent", "tabheader__item_active");
  modal(".modal", "[data-modal]");
  timer(".timer", "2025-09-12");
  cards();
  calc();
  forms("form");
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
});
