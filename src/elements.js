export class Elements extends Array {
  add(element) {
    if (!this.includes(element)) {
      this.push(element);
    }
  }

  remove(element) {
    if (this.includes(element)) {
      this.splice(this.indexOf(element), 1);
    }
  }

  reorder() {
    this.sort((a, b) => {
      const compare = a.compareDocumentPosition(b);
      if (compare & Node.DOCUMENT_POSITION_PRECEDING) { // eslint-disable-line no-bitwise
        return 1;
      }
      if (compare & Node.DOCUMENT_POSITION_FOLLOWING) { // eslint-disable-line no-bitwise
        return -1;
      }
      return 0;
    });
  }

  refocus(target) {
    if (!this.includes(target)) {
      return;
    }

    this.reorder();

    let last;
    let passed = false;
    for (const element of this) {
      if (element === target) {
        if (last) {
          break;
        }
        passed = true;
        continue;
      }
      if (!element.isConnected) {
        continue;
      }
      last = element;
      if (passed) {
        break;
      }
    }
    last?.focus();
  }
}
