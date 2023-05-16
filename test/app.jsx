import React, { StrictMode } from 'react';

import { ExampleOne } from './example_one';
import { ExampleTwo } from './example_two';
import { Store } from './store';

const initialState1 =  [{ id: 1, title: 'Initial todo' }];
const initialState2 = [];

export function App() {
  return (
    <StrictMode>
      <Store initialState={initialState1}>
        <ExampleOne />
      </Store>
      <Store initialState={initialState2}>
        <ExampleTwo />
      </Store>
    </StrictMode>
  );
}
