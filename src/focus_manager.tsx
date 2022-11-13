import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Context } from './context.js';

interface Props {
  children: React.ReactNode
}

export function FocusManager({ children }: Props) {
  const [elements] = useState(() => new Set<Element>());

  return (
    <Context.Provider value={elements}>
      {children}
    </Context.Provider>
  );
}

FocusManager.propTypes = {
  children: PropTypes.node.isRequired,
};
