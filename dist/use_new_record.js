import { useContext } from 'react';
import { Context } from './context.js';
export function useNewRecord(id) {
    const { initialIds } = useContext(Context);
    return !initialIds.has(id);
}
//# sourceMappingURL=use_new_record.js.map