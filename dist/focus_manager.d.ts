import React from 'react';
import PropTypes from 'prop-types';
interface IFocusManagerProps {
    children: React.ReactNode;
    initialIds?: Iterable<Object | string | number | symbol>;
}
export declare function FocusManager({ children, initialIds }: IFocusManagerProps): JSX.Element;
export declare namespace FocusManager {
    var propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        initialIds: PropTypes.Requireable<(NonNullable<string | number | symbol | object | null | undefined> | null | undefined)[]>;
    };
    var defaultProps: {
        initialIds: Set<unknown>;
    };
}
export {};
//# sourceMappingURL=focus_manager.d.ts.map