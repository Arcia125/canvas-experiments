
function getRandom (limit = 1) {
  return Math.floor(Math.random() * (limit + 1));
}

function getRandomRange (lowerLimit, upperLimit) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
}

function getRandomDec (lowerLimit, upperLimit) {
  return Math.random() * (upperLimit - lowerLimit) + lowerLimit;
}

function getRandomColor () {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

function getRandomRgba ({ r, g, b, a } = {}) {
  const rand = getRandomRange;
  return `rgba(${r || rand(0, 255)}, ${g || rand(0, 255)}, ${b || rand(0, 255)}, ${a || Math.random()})`;
}

export {
  getRandom,
  getRandomRange,
  getRandomDec,
  getRandomColor,
  getRandomRgba,
};
