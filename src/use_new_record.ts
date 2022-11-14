import { useContext } from 'react';

import { Context } from './context.js';

export function useNewRecord(id: Object | string | number | symbol) : boolean {
  const { initialIds } = useContext(Context);

  return !initialIds.has(id);
}
