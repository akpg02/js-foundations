const { sum } = require("../src/sum");

describe("sum", () => {
  [
    { a: 2, b: 3, out: 5 },
    { a: 2, b: 2, out: 4 },
    { a: 1, b: 5, out: 6 },
  ].forEach(({ a, b, out }) => {
    test(`sum(${a}, ${b}) -> ${out}`, () => {
      expect(sum(a, b)).toBe(out);
    });
  });

  test("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("coerces numeric strings safely", () => {
    expect(sum("8", "2")).toBe(10);
  });

  test("throws on non-nueric input", () => {
    expect(() => sum("hi", 2)).toThrow(/numeric/);
  });

  test("handle -0 edge case", () => {
    expect(sum(-0, 3)).toBe(3);
  });
});
