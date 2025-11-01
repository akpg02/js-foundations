const fs = require("node:fs/promises");
const { fetchAndSave } = require("../src/fetchAndSave");

jest.mock("node:fs/promises", () => ({
  writeFile: jest.fn().mockResolvedValue(),
}));

jest.mock("../src/fetchData", () => ({
  fetchJSON: jest.fn().mockResolvedValue({ hello: "world" }),
}));

test("fetches JSON and saves to file", async () => {
  const { fetchJSON } = require("../src/fetchData");
  const file = await fetchAndSave("https://api.example.com", "out.json");

  expect(fetchJSON).toHaveBeenCalledWith("https://api.example.com");
  expect(fs.writeFile).toHaveBeenCalledWith(
    "out.json",
    expect.stringContaining("hello")
  );
  expect(file).toBe("out.json");
});
