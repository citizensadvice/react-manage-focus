import React, { useCallback, useContext } from 'react';

import { useManageFocus } from '../src/use_manage_focus';

import { Context } from './store';
import { addTodo } from './actions';

export function AddButton() {
  const { dispatch } = useContext(Context);
  const ref = useManageFocus();

  const handleAdd = useCallback(() => {
    dispatch(addTodo());
  }, [dispatch]);
  return (
    <button
      type="button"
      onClick={handleAdd}
      ref={ref}
    >
      New todo
    </button>
  );
}
