import {ArrayComparator} from "./array-comparator";

describe('Array Comparator tests', () => {
  let arrayComparator;
  beforeEach(()=>{
   arrayComparator = new ArrayComparator()
  });
  it('should handle arrays', () => {
    expect(arrayComparator.canHandle(Array([1, 2, 3]))).toBeTruthy();
    expect(arrayComparator.canHandle('test')).toBeFalsy();
  });
  it('should compare arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [1, 2, 3, 4];
    expect(arrayComparator.compare(arr1, arr2)).toBeFalsy();
    expect(arrayComparator.compare(arr2, arr3)).toBeFalsy();
    expect(arrayComparator.compare(arr1, 33)).toBeFalsy();
  })
});