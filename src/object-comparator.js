import { AbsComparator } from "./abs-comparator.js";

export class ObjectComparator extends AbsComparator {
  canHandle(value) {
    return value != null && typeof value === "object" && !Array.isArray(value);
  }

  compare(a, b, context) {
    if (typeof b !== "object" || b == null || Array.isArray(b)) {
      return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every(
      (key) => keysB.includes(key) && context.deepEqual(a[key], b[key]),
    );
  }
}
