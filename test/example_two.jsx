import React, { useContext, useState } from 'react';

import { FocusManager } from '../src/focus_manager';

import { AddButton } from './add_button';
import { Context } from './store';
import { Todo } from './todo';

export function ExampleTwo() {
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
    </FocusManager>
  );
}
