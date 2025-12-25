import type { DeepEqualEngine } from '../deep-equal-engine.js';

export interface IComparator {
  compare(_a: unknown, _b: unknown, _context?: DeepEqualEngine): boolean;
  canHandle(_value: unknown): boolean;
}
