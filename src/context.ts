import { createContext } from 'react';

interface IContextValue {
  elements: Set<HTMLElement>,
  initialIds: Set<Object | string | number | symbol>,
}

export const Context = createContext<IContextValue>({
  elements: new Set(),
  initialIds: new Set(),
});
