import React, { useContext, useState } from 'react';

import { FocusManager } from '../src/focus_manager';

import { AddButton } from './add_button';
import { Context } from './store';
import { RandomiseButton } from './randomise_button';
import { ReverseButton } from './reverse_button';
import { Todo } from './todo';

export function ExampleOne() {
  const { todos } = useContext(Context);
  const [initialIds] = useState(() => todos.map((t) => t.id));

  return (
    <FocusManager initialIds={initialIds}>
      <ul>
        {todos.map(({ id }) => (
          <li key={id}>
            <Todo id={id} />
          </li>
        ))}
      </ul>
      <AddButton />
      <RandomiseButton />
      <ReverseButton />
    </FocusManager>
  );
}
