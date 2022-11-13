import React, { StrictMode } from 'react';

import { FocusManager } from '../src/focus_manager';

import { AddButton } from './add_button';
import { RandomiseButton } from './randomise_button';
import { Todos } from './todos';
import { Store } from './store';

export function App() {
  return (
    <StrictMode>
      <Store>
        <FocusManager>
          <Todos />
          <AddButton />
          <RandomiseButton />
        </FocusManager>
      </Store>
    </StrictMode>
  );
}
