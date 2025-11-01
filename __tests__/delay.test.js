const { delay } = require("../src/delay");

jest.useFakeTimers();

test("waits specified ms", async () => {
  const spy = jest.fn();
  const promise = delay(2000).then(spy);

  jest.advanceTimersByTime(2000);
  await promise;

  expect(spy).toHaveBeenCalled();
});
