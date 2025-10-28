const { sum } = require("../src/sum");

describe("sum", () => {
  test("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("coerces numeric strings safely", () => {
    expect(sum("8", "2")).toBe(10);
  });

  test("throws on non-nueric input", () => {
    expect(() => sum("hi", 2)).toThrow(/numeric/);
  });
});
