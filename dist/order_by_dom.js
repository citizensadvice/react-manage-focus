export function orderByDOM(elements) {
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
//# sourceMappingURL=order_by_dom.js.map