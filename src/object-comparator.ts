import { AbsComparator } from './abs-comparator.js';
import type { DeepEqualEngine } from './deep-equal-engine.js';

export class ObjectComparator extends AbsComparator {
  canHandle(value: unknown): boolean {
    return value != null && typeof value === 'object' && !Array.isArray(value);
  }

  compare(
    a: Record<string, unknown>,
    b: Record<string, unknown>,
    context: DeepEqualEngine,
  ): boolean {
    if (!this.canHandle(a) || !this.canHandle(b)) {
      return false;
    }

    const keysA: string[] = Object.keys(a);
    const keysB: string[] = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every(
      (key: string): boolean =>
        keysB.includes(key) && context.deepEqual(a[key], b[key]),
    );
  }
}
