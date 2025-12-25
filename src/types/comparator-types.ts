import { PrimitiveComparator } from '../primitive-comparator.js';
import { ArrayComparator } from '../array-comparator.js';
import { DateComparator } from '../date-comparator.js';
import { ObjectComparator } from '../object-comparator.js';

export type ComparatorType =
  | PrimitiveComparator
  | ArrayComparator
  | DateComparator
  | ObjectComparator;
