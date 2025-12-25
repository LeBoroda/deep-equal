export class AbsComparator {
  compare(a:unknown, b:unknown, context?:unknown) {
    throw new Error('Override compare() method');
  }

  canHandle(value:unknown) {
    throw new Error('Override canHandle() method');
  }
}
