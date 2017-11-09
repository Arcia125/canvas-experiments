
function clampNumber (num, min = 0, max) {
  return Math.min(Math.max(num, min), max);
}

export {
  clampNumber
};