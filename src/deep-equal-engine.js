import { PrimitiveComparator } from "./primitive-comparator";
import { ArrayComparator } from "./array-comparator";
import { ObjectComparator } from "./object-comparator";

export class DeepEqualEngine {
  constructor() {
    this.comparators = [
      new PrimitiveComparator(),
      new ArrayComparator(),
      new ObjectComparator(),
    ];
    this.visited = new WeakSet();
  }

  deepEqual(a, b) {
    if (typeof a === "object" && a !== null) {
      if (this.visited.has(a)) {
        return a === b;
      }
      this.visited.add(a);
    }
    const comparator = this.findComparator(a);

    if (!comparator) {
      throw new Error(`Cannot find comparator for ${typeof a}`);
    }

    return comparator.compare(a, b, this);
  }

  findComparator(value) {
    return this.comparators.find((comparator) => comparator.canHandle(value));
  }
}
