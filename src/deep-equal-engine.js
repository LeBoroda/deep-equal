import { PrimitiveComparator } from "./primitive-comparator.js";
import { ArrayComparator } from "./array-comparator.js";
import { ObjectComparator } from "./object-comparator.js";
import {DateComparator} from "./date-comparator.js";

export class DeepEqualEngine {
  constructor() {
    this.comparators = [
      new PrimitiveComparator(),
      new ArrayComparator(),
      new DateComparator(),
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
