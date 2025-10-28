function toNum(x) {
  if (typeof x === "number") return x;
  if (typeof x === "string" && x.trim() !== "" && !Number.isNaN(Number(x))) {
    return Number(x);
  }
  throw new TypeError("Expected numeric input");
}

function sum(a, b) {
  return toNum(a) + toNum(b);
}

module.exports = { sum };
