import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Context } from './context.js';

interface IFocusManagerProps {
  children: React.ReactNode,
  initialIds?: Iterable<Object | string | number | symbol>
}

export function FocusManager({ children, initialIds }: IFocusManagerProps) {
  const [focusElement, setFocusElement] = useState<HTMLElement | null>(null);
  const [value] = useState(() => ({
    elements: new Set<HTMLElement>(),
    initialIds: new Set(initialIds),
    setFocusElement,
  }));

  useLayoutEffect(() => {
    if(focusElement) {
      focusElement.focus();
      setFocusElement(null);
    }
  }, [focusElement, setFocusElement]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

FocusManager.propTypes = {
  children: PropTypes.node.isRequired,
  initialIds: PropTypes.oneOfType([
    PropTypes.instanceOf(Set),
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number,
      PropTypes.symbol,
    ])),
  ]),
};

FocusManager.defaultProps = {
  initialIds: new Set(),
};
