const https = require("node:https");

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            resolve(json);
          } catch (err) {
            reject(new Error("Invalid JSON"));
          }
        });
      })
      .on("error", reject);
  });
}

module.exports = { fetchJSON };
