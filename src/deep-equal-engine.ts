import { PrimitiveComparator } from './primitive-comparator.js';
import { ArrayComparator } from './array-comparator.js';
import { ObjectComparator } from './object-comparator.js';
import { DateComparator } from './date-comparator.js';
import type { ComparatorType } from './types/comparator-types';
import type { PrimitiveType } from './types/primitive-types';

export class DeepEqualEngine {
  comparators: ComparatorType[];
  visited: WeakSet<object>;

  constructor() {
    this.comparators = [
      new PrimitiveComparator(),
      new ArrayComparator(),
      new DateComparator(),
      new ObjectComparator(),
    ];
    this.visited = new WeakSet();
  }

  deepEqual(a: unknown, b: unknown): boolean {
    if (typeof a !== typeof b) {
      return false;
    }

    if (a && typeof a === 'object') {
      if (this.visited.has(a as object)) {
        return a === b;
      }
      this.visited.add(a as object);
    }

    const comparator: ComparatorType | undefined = this.findComparator(a);

    if (!comparator) {
      return a === b;
    }

		return comparator.compare(a, b, this);
  }

  findComparator(value: unknown): ComparatorType | undefined {
    return this.comparators.find((comparator: ComparatorType): boolean =>
      comparator.canHandle(value),
    );
  }
}
