import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import { useManageFocus } from '../src/use_manage_focus';
import { useNewRecord } from '../src/use_new_record';

import { Context } from './store';
import { removeTodo, updateTodo } from './actions';

export function Todo({ id }) {
  const { dispatch, todos } = useContext(Context);
  const { title } = todos.find((t) => t.id === id);
  const ref = useManageFocus();
  const newRecord = useNewRecord(id);

  const handleRemove = useCallback(() => {
    dispatch(removeTodo(id));
  }, [id, dispatch]);

  const handleUpdate = useCallback((values) => {
    dispatch(updateTodo(id, values));
  }, [id, dispatch]);

  return (
    <>
      <label htmlFor={`title_${id}`}>
        {`Item ${id}`}
        <input
          autoFocus={newRecord} // eslint-disable-line jsx-a11y/no-autofocus
          id={`title_${id}`}
          type="text"
          value={title}
          onChange={({ target: { value } }) => handleUpdate({ title: value })}
        />
      </label>
      <button
        type="button"
        onClick={handleRemove}
        ref={ref}
        aria-label={`Delete with manage focus ${id}`}
      >
        Delete with manage focus
      </button>
      <button
        type="button"
        onClick={handleRemove}
        aria-label={`Delete without manage focus ${id}`}
      >
        Delete without manage focus
      </button>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};
