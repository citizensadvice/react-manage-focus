import { createContext } from 'react';

interface IContextValue {
  elements: Set<Element>,
  firstRenderRef: React.RefObject<boolean>,
}

export const Context = createContext<IContextValue>({
  elements: new Set(),
  firstRenderRef: { current: true },
});
