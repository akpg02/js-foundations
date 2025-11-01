const fs = require("node:fs/promises");
const { fetchJSON } = require("./fetchData");

async function fetchAndSave(url, filePath) {
  const data = await fetchJSON(url);
  const json = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, json);
  return filePath;
}

module.exports = { fetchAndSave };
