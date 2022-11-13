import { useContext } from 'react';

import { Context } from './context';
import { useFirstRender } from './use_first_render.js';

export function useNewRecord() : boolean {
  const recordFirstRenderRef = useFirstRender();
  const { firstRenderRef } = useContext(Context);

  return recordFirstRenderRef.current && !firstRenderRef.current;
}
