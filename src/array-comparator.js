import {AbsComparator} from "./abs-comparator";
import context from "node:assert";

export class ArrayComparator extends AbsComparator {
  canHandle(value) {
    return Array.isArray(value);
  }

  compare(a, b) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => context.deepEqual(item, b[index]));
  }
}