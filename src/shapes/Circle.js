
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
    radius = getRandomRange(Canvas.height / 200, Canvas.height / 20),
    startAngle = 0,
    endAngle = 360,
    anticlockwise = false,
    color = getRandomRgba({ a: getRandomDec(0.95, 1) }),
    xDir = getRandomDec(-10, 10),
    yDir = getRandomDec(-10, 10),
    speedLimit = 5,
    // strokeStyle = getRandomRgba(),
  } = {}) {
    this.x = x;
    this.y = y;
    // this.history = [{ x, y }];
    this.counter = 0;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = anticlockwise;
    this.color = color;
    this.xDir = xDir;
    this.yDir = yDir;
    this.speedLimit = speedLimit;
    // this.strokeStyle = strokeStyle;
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
      // strokeStyle,
    } = this;
    ctx.fillStyle = color;
    // ctx.strokeStyle = strokeStyle;
    // ctx.rotate(1);
    
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = color;
    // if (this.history.length > 500) {
    //   this.history.shift();
      
    // }
    // let counter = 0;
    // this.history.forEach(pos => {
    //   if (counter < 1) {
    //     counter++;
    //     ctx.moveTo(pos.x, pos.y);
    //     return;
    //   }
    //   if (pos.x <= 0 || pos.y <= 0 || pos.x >= Canvas.width || pos.y >= Canvas.height) {
    //     ctx.stroke();
    //     ctx.closePath();
    //     ctx.beginPath();
    //     return;
    //   }
    //   ctx.lineTo(pos.x, pos.y);
    // });
    // ctx.stroke();
    // ctx.closePath();
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
    this.xDir += getRandomDec(-1, 1);
    this.yDir += getRandomDec(-1, 1);
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
    // this.history.push({ x: this.x, y: this.y });
  }
  setRadius = radius => {
    this.radius = clampNumber(radius, 1, 500);
  }
}

export default Circle;
