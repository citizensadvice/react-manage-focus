import React, { useCallback, useContext } from 'react';

import { Context } from './store';
import { randomiseTodos } from './actions';

export function RandomiseButton() {
  const { dispatch } = useContext(Context);

  const handleRandomise = useCallback(() => {
    dispatch(randomiseTodos());
  }, [dispatch]);

  return (
    <button
      type="button"
      onClick={handleRandomise}
    >
      Randomise
    </button>
  );
}
