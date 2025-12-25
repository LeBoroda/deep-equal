import { AbsComparator } from './abs-comparator.js';
import type {DeepEqualEngine} from "./deep-equal-engine.js";

export class ArrayComparator extends AbsComparator {
  canHandle(value : unknown) {
    return Array.isArray(value);
  }

  compare(a: unknown[], b: unknown[], context : DeepEqualEngine): boolean {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => context.deepEqual(item, b[index]));
  }
}
