import { AbsComparator } from "./abs-comparator.js";

export class PrimitiveComparator extends AbsComparator {
  canHandle(value) {
    return value == null || typeof value !== "object";
  }

  compare(a, b) {
    return a === b;
  }
}
