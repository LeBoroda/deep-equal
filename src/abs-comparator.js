export class AbsComparator {
  compare(a, b) {
    throw new Error("Override compare() method");
  }

  canHandle(value) {
    throw new Error("Override canHandle() method");
  }
}