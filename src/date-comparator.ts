import { AbsComparator } from './abs-comparator.js';

export class DateComparator extends AbsComparator {
  canHandle(value:unknown):boolean {
    return value instanceof Date;
  }

  compare(a: Date, b:Date):boolean {
    return a.getTime() === b.getTime();
  }
}