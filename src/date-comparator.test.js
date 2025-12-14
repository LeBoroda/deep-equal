import {DateComparator} from "./date-comparator.js";

describe('Date Comparator Tests', () => {
  let dateComparator;

  beforeEach(() => {
    dateComparator = new DateComparator();
  });
  it('Should handle dates', ()=>{
    expect(dateComparator.canHandle(new Date("2323-01-11"))).toBeTruthy();
  });
  it('Should compare dates correctly', () => {
    const date1 = new Date("2323-01-11");
    const date2 = new Date("2323-01-12");
    const date3 = new Date("2323-01-12");
    expect(dateComparator.compare(date1, date2)).toBeFalsy();
    expect(dateComparator.compare(date2, date3)).toBeTruthy();
    expect(dateComparator.compare(date1, "2323-01-11")).toBeFalsy();
  });
});