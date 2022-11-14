import React, { StrictMode } from 'react';

import { Todos } from './todos';
import { Store } from './store';

export function App() {
  return (
    <StrictMode>
      <Store>
        <Todos />
      </Store>
    </StrictMode>
  );
}
