function once(fn) {
  if (typeof fn !== "function") throw new TypeError("Expected a function");
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

module.exports = { once };
