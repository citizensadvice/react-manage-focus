import { useCallback, useContext, useRef } from 'react';
import { Context } from './context';

export function useManageFocus() {
  const elements = useContext(Context);
  const lastAddedRef = useRef();

  const ref = useCallback((node) => {
    const { current } = lastAddedRef;
    if (node === null && current) {
      if (current === document.activeElement) {
        elements.refocus(current);
      }
      elements.remove(current);
    } else if (node) {
      // Add a new node
      elements.add(node);
    }
    lastAddedRef.current = node;
  }, []);

  return ref;
}
