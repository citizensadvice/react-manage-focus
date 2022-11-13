import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { Context } from './context.js';
import { useFirstRender } from './use_first_render.js';

interface Props {
  children: React.ReactNode
}

export function FocusManager({ children }: Props) {
  const [elements] = useState(() => new Set<Element>());
  const firstRenderRef = useFirstRender();

  const value = useMemo(() => ({
    elements,
    firstRenderRef,
  }), [elements, firstRenderRef]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

FocusManager.propTypes = {
  children: PropTypes.node.isRequired,
};
