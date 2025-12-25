import { AbsComparator } from "./abs-comparator.js";

export class ArrayComparator extends AbsComparator {
  canHandle(value) {
    return Array.isArray(value);
  }

  compare(a, b, context) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => context.deepEqual(item, b[index]));
  }
}
