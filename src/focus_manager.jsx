import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Context } from './context';
import { Elements } from './elements';

export function FocusManager({ children }) {
  const [elements] = useState(() => new Elements());

  return (
    <Context.Provider value={elements}>
      {children}
    </Context.Provider>
  );
}

FocusManager.propTypes = {
  children: PropTypes.node.isRequired,
};
