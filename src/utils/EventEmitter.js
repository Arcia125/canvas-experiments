
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on = (event, func) => {
    if (typeof this.events[event] !== "object") {
      this.events[event] = [];
    }
    this.events[event].push(func);
  }

  removeListener = (event, func) => {
    if (typeof this.events[event] !== "object") {
      return;
    }
    const index = this.events[event].indexOf(func);
    if (index === -1) {
      return;
    }
    this.events[event].splice(index, 1);
  }

  emit = event => {
    (this.events[event] || []).forEach(listener => typeof listener === "function" ? listener() : undefined);
  }

  once = (event, func) => {
    const closure = () => {
      func();
      this.removeListener(event, func);
    };
    this.on(event, closure);
  }
}

export {
  EventEmitter
};