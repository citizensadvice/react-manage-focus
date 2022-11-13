import React, { useContext } from 'react';

import { Context } from './store';
import { Todo } from './todo';

export function Todos() {
  const { todos } = useContext(Context);

  return (
    <ul>
      {todos.map(({ id }) => (
        <li key={id}>
          <Todo id={id} />
        </li>
      ))}
    </ul>
  );
}
