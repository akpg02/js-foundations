const fs = require("node:fs");

function readTextFile(filePath, cb) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return cb(err);
    cb(null, data.trim());
  });
}

module.exports = { readTextFile };
