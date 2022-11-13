import { useCallback, useContext, useRef } from 'react';
import { Context } from './context.js';

import { refocus } from './refocus.js';

export function useManageFocus() {
  const { elements } = useContext(Context);
  const lastAddedRef = useRef<Element>();

  const ref = useCallback((node: Element) => {
    const { current } = lastAddedRef;
    if (node === null && current) {
      if (current === document.activeElement) {
        refocus(current, elements);
      }
      elements.delete(current);
    } else if (node) {
      elements.add(node);
    }
    lastAddedRef.current = node;
  }, []);

  return ref;
}
