"use strict";
import {
  animate,
  scroll,
  stagger,
  inView,
} from "https://cdn.skypack.dev/motion";

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

const checkbox = document.getElementById("switch");
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

scroll(animate(".progress", { scaleX: [0, 1] }));
animate("body", { opacity: [0, 1] }, { duration: 1.5 });
