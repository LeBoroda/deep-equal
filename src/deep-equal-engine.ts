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

    if (comparator instanceof PrimitiveComparator) {
      return comparator.compare(a as PrimitiveType, b as PrimitiveType);
    } else if (comparator instanceof DateComparator) {
      return comparator.compare(a as Date, b as Date);
    } else if (comparator instanceof ArrayComparator) {
      if (Array.isArray(a) && Array.isArray(b)) {
        return comparator.compare(a, b, this);
      }
      return false;
    } else {
      if (a && typeof a === 'object' && b && typeof b === 'object') {
        return comparator.compare(
          a as Record<string, unknown>,
          b as Record<string, unknown>,
          this,
        );
      }
      return false;
    }
  }

  findComparator(value: unknown): ComparatorType | undefined {
    return this.comparators.find((comparator: ComparatorType): boolean =>
      comparator.canHandle(value),
    );
  }
}
