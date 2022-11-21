import { useContext, useEffect, useRef } from 'react';

import { Context } from './context.js';

export function useNewRecord(id: Object | string | number | symbol) : boolean {
  const usedRef = useRef<boolean>(false);
  const { initialIds } = useContext(Context);

  useEffect(() => {
    usedRef.current = true;
  }, []);

  return !!initialIds && !initialIds.has(id) && !usedRef.current;
}
