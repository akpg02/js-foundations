function uniq(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");
  return [...new Set(arr)];
}

module.exports = { uniq };
