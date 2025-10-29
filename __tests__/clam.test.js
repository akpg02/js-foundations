const { clamp } = require("../src/clamp");

describe("clamp", () => {
  [
    { n: 5, min: 0, max: 10, out: 5 },
    { n: -1, min: 0, max: 10, out: 0 },
    { n: 22, min: 0, max: 10, out: 10 },
  ].forEach(({ n, min, max, out }) => {
    test(`${n} -> ${out} within [${min},${max}]`, () => {
      expect(clamp(n, min, max)).toBe(out);
    });
  });

  test("test not a number", () => {
    expect(() => clamp("x", 0, 10)).toThrow(/numeric/);
  });

  test("min and max out of range", () => {
    expect(() => clamp(-3, 6, 0)).toThrow(/min must be <= max/);
  });
});
