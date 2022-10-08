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

const rocket = document.querySelector("#rocket");
const properties = {
  duration: 1000,
  iterations: 1,
  direction: "alternate",
  easing: "ease-in-out",
};
const keyframes = [{ transform: "translate(0vw, 20vw)" }, ,];
rocket.animate(keyframes, properties);

const hehe = document.querySelectorAll("h2");
/*
document.querySelectorAll("h2").forEach((item) => {
  scroll(animate(item, { opacity: [1, 1, 0] }), {
    target: item,
  });
});
*/
inView("section", ({ target }) => {
  animate(
    target.querySelector(".fade"),
    { opacity: 1, x: [-70, -50, 0] },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});
