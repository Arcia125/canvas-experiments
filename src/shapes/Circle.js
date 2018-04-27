
import {
  getRandom,
  getRandomRange,
  getRandomDec,
  getRandomColor,
  getRandomRgba,
  clampNumber,
} from "../utils";
import { Canvas } from "../canvas";

class Circle {
  constructor({
    x = getRandom(Canvas.width),
    y = getRandom(Canvas.height),
    radius = getRandomRange(10, 10 * 10),
    startAngle = 0,
    endAngle = 360,
    anticlockwise = false,
    color = getRandomRgba({ a: getRandomDec(0.95, 1) }),
    xDir = getRandomDec(-10, 10),
    yDir = getRandomDec(-10, 10),
    speedLimit = 5,
    accelerationMin = -1,
    accelerationMax = 1,
  } = {}) {
    this.x = x;
    this.y = y;
    this.counter = 0;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = anticlockwise;
    this.color = color;
    this.xDir = xDir;
    this.yDir = yDir;
    this.speedLimit = speedLimit;
    this.accelerationMin = accelerationMin;
    this.accelerationMax = accelerationMax;
  }

  draw = () => {
    const { ctx } = Canvas;
    ctx.beginPath();
    const {
      x,
      y,
      radius,
      startAngle,
      endAngle,
      anticlockwise,
      color,
      speedLimit,
    } = this;
    ctx.fillStyle = color;
    
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.closePath();
  }

  update = () => {
    const {
      height,
      width,
    } = Canvas;
    let {
      x,
      y,
      xDir,
      yDir,
      radius,
      startAngle,
      endAngle,
      counterclockwise,
      color,
      speedLimit,
    } = this;
    this.x += xDir;
    this.y += yDir;
    const accelerationMin = parseInt(this.accelerationMin);
    const accelerationMax = parseInt(this.accelerationMax);
    this.xDir += getRandomDec(accelerationMin, accelerationMax);
    this.yDir += getRandomDec(accelerationMin, accelerationMax);
    const radiusChange = [-1, 1];
    this.setRadius(this.radius + getRandomDec(...radiusChange));
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.xDir > speedLimit) {
      this.xDir = speedLimit;
    }
    if (this.xDir < -speedLimit) {
      this.xDir = -speedLimit;
    }
    if (this.yDir > speedLimit) {
      this.yDir = speedLimit;
    }
    if (this.yDir < -speedLimit) {
      this.yDir = -speedLimit;
    }
  }
  setRadius = radius => {
    this.radius = clampNumber(radius, 1, 500);
  }
}

export default Circle;
