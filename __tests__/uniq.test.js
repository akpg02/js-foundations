const { uniq } = require("../src/uniq");

describe("uniq", () => {
  [
    { input: ["a", "b", "b"], out: ["a", "b"] },
    { input: [1, 2, 3, 3, 2], out: [1, 2, 3] },
    { input: ["c", "c"], out: ["c"] },
  ].forEach(({ input, out }) => {
    test(`${input} -> ${out}`, () => {
      expect(uniq(input)).toEqual(out);
    });
  });

  test("removes duplicate", () => {
    expect(uniq([1, 2, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(uniq(["a", "a", "b", "e", "d"])).toEqual(["a", "b", "e", "d"]);
  });

  test("throws if not an array", () => {
    expect(() => uniq("abc")).toThrow(/array/);
  });
});
