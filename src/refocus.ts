import { orderByDOM } from './order_by_dom.js';

export function refocus(target : Element, elements : Set<Element>) {
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
    last = element as HTMLElement;
    if (passed) {
      break;
    }
  }
  last?.focus();
}
