import { useCallback, useContext, useRef } from 'react';

import { Context } from './context.js';
import { refocus } from './refocus.js';

export function useManageFocus() {
  const { setFocusElement, elements = new Set<HTMLElement>() } = useContext(Context);
  const lastAddedRef = useRef<HTMLElement>();

  const ref = useCallback((node: HTMLElement) => {
    // The callback ref does not tell you which element was removed so we need to
    // store that in a ref
    const { current } = lastAddedRef;
    // This relies on the callback being called before the
    // node is removed from the DOM
    // This is observed in all React versions to date.
    if (node === null && current) {
      if (current === document.activeElement) {
        setFocusElement?.(refocus(current, elements));
      }
      elements.delete(current);
    } else if (node) {
      elements.add(node);
    }
    lastAddedRef.current = node;
  }, [elements, setFocusElement]);

  return ref;
}
