import { orderByDOM } from './order_by_dom.js';
export function refocus(target, elements) {
    if (!elements.has(target)) {
        return;
    }
    let last;
    let passed = false;
    for (const element of orderByDOM(elements)) {
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
//# sourceMappingURL=refocus.js.map