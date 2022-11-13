import { useEffect, useRef } from 'react';

export function useFirstRender() {
  const firstRenderRef = useRef<boolean>(true);

  useEffect(() => {
    firstRenderRef.current = false;
  }, []);

  return firstRenderRef;
}
