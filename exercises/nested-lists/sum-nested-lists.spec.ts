import { sumNestedLists } from "./sum-nested-lists";

describe("sumNestedLists", () => {
  it("should sum the items on a flat list", () => {
    expect(sumNestedLists([1, 2, 3])).toEqual(6);
  });

  it("should sum the items on a nested list", () => {
    expect(sumNestedLists([1, [[2], 3]])).toEqual(6);
  });

  it("should sum the items on a deeply nested list", () => {
    expect(
      sumNestedLists([1, [[2], 3], [4], 5, [6, 100, [[7], [[8]], 9]], 10])
    ).toEqual(155);
  });
});
