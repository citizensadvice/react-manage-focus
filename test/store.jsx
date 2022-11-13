import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { reducer } from './reducer';

export const Context = createContext();

export function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const value = useMemo(() => ({
    dispatch,
    ...state,
  }), [state]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
