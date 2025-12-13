import {sum} from "./sum";

describe('Test sum', () => {
  it('should return correct sum', () => {
    expect(sum(3,5)).toBe(8);
  });
});