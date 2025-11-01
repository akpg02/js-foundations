const { readTextFile } = require("../src/promiseDemo");
const fs = require("node:fs/promises");

beforeAll(async () => {
  await fs.writeFile("tmp.txt", "Promise!");
});

test("read text file using promises", async () => {
  const data = await readTextFile("tmp.txt");
  expect(data).toBe("Promise!");
});
