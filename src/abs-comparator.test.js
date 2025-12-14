import { AbsComparator } from "./abs-comparator";

describe("Abstract class tests", () => {
  let absComparator;
  beforeEach(() => {
    absComparator = new AbsComparator();
  });
  it("should throw error if compare() is not overridden", () => {
    expect(() => absComparator.compare(2, 3)).toThrow(
      "Override compare() method",
    );
  });
  it("should throw error if canHandle() is not overridden", () => {
    expect(() => absComparator.canHandle("value")).toThrow(
      "Override canHandle() method",
    );
  });
});
