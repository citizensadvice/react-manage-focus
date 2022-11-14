import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context.js';
export function FocusManager({ children, initialIds }) {
    const [value] = useState(() => ({
        elements: new Set(),
        initialIds: new Set(initialIds),
    }));
    return (React.createElement(Context.Provider, { value: value }, children));
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
//# sourceMappingURL=focus_manager.js.map