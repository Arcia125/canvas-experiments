

class Canvas {
  constructor() {
  }
  init = selector => {
    this.selectCanvas(selector);
    this.resize();
    window.onresize = () => {
      this.resize();
    }
  }

  selectCanvas = selector => {
    return this.ctx = (this.canvas = document.querySelector((this.selector = selector))).getContext("2d");
  }

  resize = () => {
    this.width = this.canvas.width = document.body.clientWidth;
    this.height = this.canvas.height = document.body.clientHeight;
  }
}

export default new Canvas();