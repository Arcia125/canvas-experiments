
import {
  getRandom,
  getRandomColor,
  getRandomRange,
  getRandomRgba,
  getRandomDec,
} from "./utils";
import { Circle } from "./shapes";
import { Canvas } from "./canvas";
import preact from "preact";
import App from "./App";
import Settings from "./Settings";

let circles;


function init () {
  document.addEventListener("DOMContentLoaded", () => {
    Canvas.init("#canvas");
    preact.render(<App />, document.querySelector(".app"));

    const settings = {
      speedLimit: {
        value: 5,
        options: {
          min: 0,
          max: 500,
          label: "Speed Limit",
        }
      },
      circleSize: {
        value: Canvas.height / 200,
        options: {
          min: 1,
          max: 200,
          label: "Circle Size",
        }
      },
      circleSizeVariance: {
        value: 10,
        options: {
          min: 1,
          max: 10,
          label: "Circle Size Variance",
        }
      },
      circleCount: {
        value: 200,
        options: {
          min: 1,
          max: 1000,
          label: "Circle Count",
        }
      },
      updateDelay: {
        value: 60,
        options: {
          min: 1,
          max: 2000,
          label: "Update Delay",
        }
      },
      circleAcceleration: {
        value: 1,
        options: {
          min: 0,
          max: 100,
          label: "Circle Acceleration",
        }
      },
      circleAlphaMin: {
        value: .95,
        options: {
          min: 0,
          max: 1,
          step: .1,
          label: "Circle Alpha Min",
        }
      },
      circleAlphaMax: {
        value: 1,
        options: {
          min: 0,
          max: 1,
          step: .1,
          label: "Circle Alpha Max",
        }
      },
      backgroundColor: {
        value: "#000",
        options: {
          type: "color",
          label: "Background Color",
        }
      }
    };
    Settings.addSettings(settings);
    initCircles(Settings.getSetting("circleCount"));
    let interval = setInterval(update, Settings.getSetting("updateDelay"));
    let animationFrameId = window.requestAnimationFrame(draw);
    Settings.on("change", () => {
      window.cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      initCircles(Settings.getSetting("circleCount"));
      interval = setInterval(update, Settings.getSetting("updateDelay"));
      animationFrameId = window.requestAnimationFrame(draw);
    });
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
    const circle = getRandomCircle();
    circles.push(circle);
  }
  return circles;
}

function getRandomCircle () {
  const circleSize = Settings.getSetting("circleSize");
  const circleSizeVariance = Settings.getSetting("circleSizeVariance");
  const circleAlphaMin = parseFloat(Settings.getSetting("circleAlphaMin"));
  const circleAlphaMax = parseFloat(Settings.getSetting("circleAlphaMax"));
  const circleSpeedVariance = 1;
  const circleAcceleration = Settings.getSetting("circleAcceleration");
  return new Circle({
    x: getRandom(Canvas.width),
    y: getRandom(Canvas.height),
    radius: getRandomRange(circleSize, circleSize * Settings.getSetting("circleSizeVariance")),
    startAngle: 0,
    endAngle: 360,
    anticlockwise: false,
    color: getRandomRgba({ a: getRandomDec(circleAlphaMin, circleAlphaMax) }),
    xDir: getRandomDec(-circleSpeedVariance, circleSpeedVariance),
    yDir: getRandomDec(-circleSpeedVariance, circleSpeedVariance),
    speedLimit: Settings.getSetting("speedLimit"),
    accelerationMin: -circleAcceleration,
    accelerationMax: circleAcceleration,
  });
}

function update () {
  circles && circles.forEach(circle => {
    circle && typeof circle.update == "function" && circle.update();
  });
}

init();
