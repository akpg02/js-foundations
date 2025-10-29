function clamp(n, min, max) {
  n = Number(n);
  min = Number(min);
  max = Number(max);

  if ([n, min, max].some(Number.isNaN)) {
    throw new TypeError("Expected numeric input");
  }

  if (min > max) throw new RangeError("min must be <= max");

  if (n <= min) return min;
  if (n >= max) return max;
  return n;
}

module.exports = { clamp };
