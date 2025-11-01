const { readTextFile } = require("../src/callbackDemo");
const fs = require("node:fs");

test("error message return", (done) => {
  readTextFile("tmpts.txt", (err, data) => {
    expect(err).not.toBeNull();
    done();
  });
});

test("read text file (callback style)", (done) => {
  fs.writeFileSync("tmp.txt", "Hello Async!");
  readTextFile("tmp.txt", (err, data) => {
    expect(err).toBeNull();
    expect(data).toBe("Hello Async!");
    done();
  });
});
