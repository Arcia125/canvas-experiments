
import {
  getRandom,
  getRandomColor,
  getRandomRange,
  getRandomRgba,
} from "./utils";
import { Circle } from "./shapes";
import { Canvas } from "./canvas";
import preact from "preact";
// import {
//   Component,
//   Settings,
//   Button,
// } from "./components";
import App from "./App";

let circles;


function init () {
  document.addEventListener("DOMContentLoaded", () => {
    Canvas.init("#canvas");
    // const buttonSettings = {
    //   className: "settings-button",
    //   innerHTML: "Settings",
    // };
    // const settingsButton = new Button("body", buttonSettings);
    // settingsButton.addEventListener("click", Settings.toggleDisplay);
    // preact.render(<App />, document.querySelector(".app"));
    initCircles(500);
    setInterval(update, 60);
    window.requestAnimationFrame(draw);
  });
}

function draw () {
  const {
    ctx,
    width,
    height,
  } = Canvas;
  ctx.clearRect(0, 0, width, height);
  circles.forEach((circle, index) => {
    circle && typeof circle.draw == "function" && circle.draw();
  });
  window.requestAnimationFrame(draw);
}

function initCircles (amount = 500) {
  circles = [];
  for (let i = 0; i < amount; i++) {
    circles.push(new Circle());
  }
  return circles;
}

function update () {
  // circles && typeof circles.push == "function" && circles.push(new Circle());
  circles && circles.forEach(circle => {
    circle && typeof circle.update == "function" && circle.update();
  });
}

init();
