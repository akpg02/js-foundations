const fs = require("node:fs/promises");

function readTextFile(filePath) {
  return fs.readFile(filePath, "utf8").then((data) => data.trim());
}

module.exports = { readTextFile };
