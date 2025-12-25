import { PrimitiveComparator } from './primitive-comparator.js';

describe('Primitive values comparator test', () => {
  let primComparator: PrimitiveComparator;
  beforeEach(() => {
    primComparator = new PrimitiveComparator();
  });
  it('should handle string values', () => {
    expect(primComparator.canHandle('string')).toBeTruthy();
  });
  it('should handle number values', () => {
    expect(primComparator.canHandle(1)).toBeTruthy();
  });
  it('should handle boolean values', () => {
    expect(primComparator.canHandle(false)).toBeTruthy();
  });
  it('should handle undefined values', () => {
    expect(primComparator.canHandle(undefined)).toBeTruthy();
  });
  it('should handle null values', () => {
    expect(primComparator.canHandle(null)).toBeTruthy();
  });
  it('should handle symbol values', () => {
    expect(primComparator.canHandle(Symbol('S'))).toBeTruthy();
  });
  it('should handle bigint values', () => {
    expect(
      primComparator.canHandle(BigInt(Number.MAX_SAFE_INTEGER)),
    ).toBeTruthy();
  });
  it('should not handle objects', () => {
    expect(primComparator.canHandle(new Object({ a: 'value' }))).toBeFalsy();
  });
  it('should compare strings correctly', () => {
    expect(primComparator.compare('foo', 'foo')).toBeTruthy();
    expect(primComparator.compare('foo', 'bar')).toBeFalsy();
  });
  it('should compare numbers correctly', () => {
    expect(primComparator.compare(1, 1)).toBeTruthy();
    expect(primComparator.compare(3, 4)).toBeFalsy();
  });
  it('should compare booleans correctly', () => {
    expect(primComparator.compare(true, true)).toBeTruthy();
    expect(primComparator.compare(true, false)).toBeFalsy();
  });
  it("should compare 'undefined' correctly", () => {
    expect(primComparator.compare(undefined, undefined)).toBeTruthy();
  });
  it("should compare 'null' correctly", () => {
    expect(primComparator.compare(null, null)).toBeTruthy();
    expect(primComparator.compare(null, undefined)).toBeFalsy();
  });
  it('should compare symbols correctly', () => {
    const sym1 = Symbol('one');
    const sym2 = Symbol('two');
    expect(primComparator.compare(sym1, sym1)).toBeTruthy();
    expect(primComparator.compare(sym1, sym2)).toBeFalsy();
  });
  it('should compare bigints correctly', () => {
    expect(
      primComparator.compare(
        BigInt(Number.MAX_SAFE_INTEGER),
        BigInt(Number.MAX_SAFE_INTEGER),
      ),
    ).toBeTruthy();
    expect(primComparator.compare(BigInt(900), BigInt(400))).toBeFalsy();
  });
  it('should compare incompatible types correctly', () => {
    expect(primComparator.compare(true, 1)).toBeFalsy();
    expect(primComparator.compare(1, '1')).toBeFalsy();
    expect(primComparator.compare(undefined, 4)).toBeFalsy();
    expect(primComparator.compare(null, 'null')).toBeFalsy();
    expect(primComparator.compare(Symbol('otto'), 'otto')).toBeFalsy();
    expect(primComparator.compare(BigInt(666), 666)).toBeFalsy();
  });
});
