const { fetchJSON } = require("../src/fetchData");
const https = require("node:https");
const { EventEmitter } = require("events");

test("fetchJSON returns parsed data", async () => {
  const mockRes = new EventEmitter();
  mockRes.setEncoding = jest.fn();

  jest.spyOn(https, "get").mockImplementation((url, cb) => {
    cb(mockRes);
    process.nextTick(() => {
      mockRes.emit("data", '{"message":"ok"}');
      mockRes.emit("end");
    });
    return { on: jest.fn() };
  });

  const result = await fetchJSON("https://fakeurl.com");
  expect(result).toEqual({ message: "ok" });
});
