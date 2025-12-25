import { AbsComparator } from './abs-comparator.js';

type Primitive = string | symbol | number | boolean | null | undefined | BigInt;

export class PrimitiveComparator extends AbsComparator {
  canHandle(value : unknown): boolean {
    return value == null || typeof value !== 'object';
  }

  compare(a : Primitive, b :Primitive) : boolean {
    return a === b;
  }
}
