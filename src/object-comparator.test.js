import { ObjectComparator } from './object-comparator.js';

describe('Object Comparator tests', () => {
  let objectComparator;
  let mockContext;

  beforeEach(() => {
    objectComparator = new ObjectComparator();
    mockContext = { deepEqual: jest.fn() };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle objects', () => {
    expect(objectComparator.canHandle(Object({ a: 'test' }))).toBeTruthy();
    expect(objectComparator.canHandle(Array([1, 2, 3]))).toBeFalsy();
  });

  it('should mock context', () => {
    mockContext.deepEqual.mockReturnValueOnce(true).mockReturnValueOnce(true);

    objectComparator.compare(
      { a: 5, b: 'test' },
      { a: 5, b: 'test' },
      mockContext,
    );

    expect(mockContext.deepEqual).toHaveBeenCalledTimes(2);
    expect(mockContext.deepEqual).toHaveBeenNthCalledWith(1, 5, 5);
    expect(mockContext.deepEqual).toHaveBeenNthCalledWith(2, 'test', 'test');
  });

  it('should spot on first false', () => {
    mockContext.deepEqual.mockReturnValueOnce(false).mockReturnValueOnce(true);

    objectComparator.compare(
      { a: 5, b: 'test' },
      { a: 6, b: 'test' },
      mockContext,
    );

    expect(mockContext.deepEqual).toHaveBeenCalledTimes(1);
  });

  it('should compare objects', () => {
    const obj1 = { a: 'test' };
    const obj2 = { a: 'test' };
    const obj3 = { a: 2 };
    const obj4 = { a: 'test', b: 'test' };

    mockContext.deepEqual.mockReset();
    mockContext.deepEqual.mockReturnValueOnce(true);
    expect(objectComparator.compare(obj1, obj2, mockContext)).toBeTruthy();
    expect(mockContext.deepEqual).toHaveBeenCalledTimes(1);
    expect(mockContext.deepEqual).toHaveBeenCalledWith('test', 'test');

    mockContext.deepEqual.mockReset();
    mockContext.deepEqual.mockReturnValueOnce(false);
    expect(objectComparator.compare(obj2, obj3, mockContext)).toBeFalsy();
    expect(mockContext.deepEqual).toHaveBeenCalledTimes(1);
    expect(mockContext.deepEqual).toHaveBeenNthCalledWith(1, 'test', 2);

    mockContext.deepEqual.mockReset();
    mockContext.deepEqual.mockReturnValueOnce(true).mockReturnValueOnce(true);
    expect(objectComparator.compare(obj2, obj4, mockContext)).toBeFalsy();
    expect(mockContext.deepEqual).not.toHaveBeenCalled();
  });
});
