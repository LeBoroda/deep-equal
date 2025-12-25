import type { DeepEqualEngine } from './deep-equal-engine.js';
import type { IComparator } from './interfaces/i-comparator.js';

export class AbsComparator implements IComparator {
  compare(_a: unknown, _b: unknown, _context?: DeepEqualEngine): boolean {
    throw new Error('Override compare() method');
  }

  canHandle(_value: unknown): boolean {
    throw new Error('Override canHandle() method');
  }
}
