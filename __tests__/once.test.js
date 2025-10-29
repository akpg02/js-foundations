const { once } = require("../src/once");

describe("once", () => {
  [
    { a: 4, b: 2 },
    { a: 8, b: 4 },
    { a: 6, b: 2 },
  ].forEach(({ a, b }) => {
    test(`${a} - ${b}`, () => {
      const subOnce = once((x, y) => x - y);
      const first = subOnce(a, b);
      expect(first).toBe(a - b);
      // subsequent calls ignore new args and return the first result
      expect(subOnce(999, 111)).toBe(first);
    });
  });

  test("only runs the function once", () => {
    let counter = 0;
    const incOnce = once(() => ++counter);
    incOnce();
    incOnce();
    expect(counter).toBe(1);
  });

  test("return the first result on subsequent calls", () => {
    const addOnce = once((a, b) => a + b);
    expect(addOnce(2, 3)).toBe(5);
    expect(addOnce(5, 9)).toBe(5);
  });

  test("not a function", () => {
    expect(() => once("ab")).toThrow(/function/);
  });
});
