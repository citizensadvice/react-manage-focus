export function orderByDOM(elements : Iterable<Node>) : Array<Node> {
  return [...elements].sort((a, b) => {
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
