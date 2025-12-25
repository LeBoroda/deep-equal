import { ArrayComparator } from './array-comparator.js';

describe('Array Comparator tests', () => {
  let arrayComparator;
  let mockContext;
  beforeEach(() => {
    arrayComparator = new ArrayComparator();
    mockContext = { deepEqual: jest.fn() };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should handle arrays', () => {
    expect(arrayComparator.canHandle(Array([1, 2, 3]))).toBeTruthy();
    expect(arrayComparator.canHandle('test')).toBeFalsy();
  });

  it('should mock context', () => {
    mockContext.deepEqual.mockReturnValueOnce(true).mockReturnValueOnce(true);
    arrayComparator.compare([1, 2], [1, 2], mockContext);
    expect(mockContext.deepEqual).toHaveBeenCalledTimes(2);
    expect(mockContext.deepEqual).toHaveBeenNthCalledWith(1, 1, 1);
    expect(mockContext.deepEqual).toHaveBeenNthCalledWith(2, 2, 2);
  });

  it('should stop on first false', () => {
    mockContext.deepEqual.mockReturnValueOnce(false).mockReturnValueOnce(true);
    arrayComparator.compare([1, 2], [2, 2], mockContext);
    expect(mockContext.deepEqual).toHaveBeenCalledTimes(1);
  });

  it('should compare arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [1, 2, 3, 4];

    mockContext.deepEqual.mockReturnValueOnce(arr1).mockReturnValueOnce(arr2);
    expect(arrayComparator.compare(arr1, arr2, mockContext)).toBeFalsy();

    mockContext.deepEqual.mockReturnValueOnce(arr2).mockReturnValueOnce(arr3);
    expect(arrayComparator.compare(arr2, arr3, mockContext)).toBeTruthy();
  });
});
