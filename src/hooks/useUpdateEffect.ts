// useUpdateEffect.ts

import { useRef, useEffect } from "react";

/**
 * @description Custom hook to manage an update effect
 * @param {Function} effect - Function to execute on update
 * @param {Array<any>} deps - Dependencies to watch for updates
 * @returns {void}
 */

const useUpdateEffect = (effect: Function, deps: Array<any>): void => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, deps);

  return;
};

export default useUpdateEffect;
