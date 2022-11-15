import React from 'react';

import { renderHook } from '@testing-library/react';
import { FocusManager, useNewRecord } from '.';

function Wrapper({ children }) {
  return (
    <FocusManager initialIds={[1]}>
      {children}
    </FocusManager>
  );
}

describe('useNewRecord', () => {
  it('returns false if there is no context', () => {
    const { result } = renderHook(() => useNewRecord(1));
    expect(result.current).toEqual(false);
  });

  it('returns false if not a new record', () => {
    const { result } = renderHook(() => useNewRecord(1), { wrapper: Wrapper });
    expect(result.current).toEqual(false);
  });

  it('returns true if a new record', () => {
    const { result } = renderHook(() => useNewRecord(2), { wrapper: Wrapper });
    expect(result.current).toEqual(true);
  });
});
