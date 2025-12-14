import {AbsComparator} from "./abs-comparator.js";

export class DateComparator extends AbsComparator {
  canHandle(value) {
   return value instanceof Date;
  }

  compare(a, b) {
    return b instanceof Date && a.getTime()===b.getTime();
  }
}