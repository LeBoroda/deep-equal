import {DeepEqualEngine} from "./deep-equal-engine";
import {PrimitiveComparator} from "./primitive-comparator";
import {ArrayComparator} from "./array-comparator";
import {ObjectComparator} from "./object-comparator";

describe('Deep Equal Engine tests', () => {
  let engine;
  beforeEach(() => {
    engine = new DeepEqualEngine();
  });

  it('should find correct comparator', () => {
    expect(engine.findComparator(1)).toBeInstanceOf(PrimitiveComparator);
    expect(engine.findComparator('test')).toBeInstanceOf(PrimitiveComparator);
    expect( engine.findComparator([1, 2])).toBeInstanceOf(ArrayComparator);
    expect(engine.findComparator({a: 1, b: 2})).toBeInstanceOf(ObjectComparator);
  });

  it('should compare correctly', () => {
    expect(engine.deepEqual(1, 1)).toBeTruthy();
    expect(engine.deepEqual("2", "2")).toBeTruthy();
    expect(engine.deepEqual(3, "3")).toBeFalsy();
    expect(engine.deepEqual([1,2], [1,2])).toBeTruthy();
    expect(engine.deepEqual([1,2], [4,2])).toBeFalsy();
    expect(engine.deepEqual({a:1, b:"test"}, {a:1, b:"test"})).toBeTruthy();
    expect(engine.deepEqual({a:1, b:"test"}, {a: "test"})).toBeFalsy();
    expect(engine.deepEqual({a:1, b:"test"}, [1, "test"])).toBeFalsy();
    expect(engine.deepEqual(null, null)).toBeTruthy();
    expect(engine.deepEqual(undefined, undefined)).toBeTruthy();
    expect(engine.deepEqual(null, undefined)).toBeFalsy();
  })

  it('should handle recursive links', ()=>{
    const obj = {a: "test"};
    obj.self = obj;

    expect(engine.deepEqual(obj, obj.self)).toBeTruthy();
  });

});