import React, { useCallback, useContext } from 'react';

import { Context } from './store';
import { reverseTodos } from './actions';

export function ReverseButton() {
  const { dispatch } = useContext(Context);

  const handleReverse = useCallback(() => {
    dispatch(reverseTodos());
  }, [dispatch]);

  return (
    <button
      type="button"
      onClick={handleReverse}
    >
      Reverse
    </button>
  );
}
