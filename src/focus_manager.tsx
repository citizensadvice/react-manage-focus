import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Context } from './context.js';

interface IFocusManagerProps {
  children: React.ReactNode,
  initialIds?: Iterable<Object | string | number | symbol>
}

export function FocusManager({ children, initialIds }: IFocusManagerProps) {
  const [value] = useState(() => ({
    elements: new Set<HTMLElement>(),
    initialIds: new Set(initialIds),
  }));

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

FocusManager.propTypes = {
  children: PropTypes.node.isRequired,
  initialIds: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
    PropTypes.symbol,
  ])),
};

FocusManager.defaultProps = {
  initialIds: new Set(),
};
