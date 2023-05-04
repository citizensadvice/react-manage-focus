import { createContext } from 'react';

interface IContextValue {
  elements?: Set<HTMLElement>,
  initialIds?: Set<Object | string | number | symbol>,
  setFocusElement?: Function,
}

export const Context = createContext<IContextValue>({});
