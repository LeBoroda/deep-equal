import { AbsComparator } from './abs-comparator.js';
import type {PrimitiveType} from "./types/primitive-types";

export class PrimitiveComparator extends AbsComparator {
  canHandle(value : unknown): boolean {
    return value == null || typeof value !== 'object';
  }

  compare(a : PrimitiveType, b :PrimitiveType) : boolean {
    return a === b;
  }
}
