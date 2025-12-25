import type { DeepEqualEngine } from './deep-equal-engine.js';

export class AbsComparator {
  compare(a: unknown, b: unknown, context?: DeepEqualEngine): boolean {
    throw new Error('Override compare() method');
  }

  canHandle(value: unknown): boolean {
    throw new Error('Override canHandle() method');
  }
}
