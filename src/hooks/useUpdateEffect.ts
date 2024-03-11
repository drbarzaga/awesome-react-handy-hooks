// useUpdateEffect.ts

import { useRef, useEffect } from "react";

/**
 * @description The useUpdateEffect hook is used to execute a function on update when the dependencies changes.
 * @param {Function} effect - Function to execute on update
 * @param {Array<any>} deps - Dependencies to watch for updates
 * @returns {void}
 * @example
 * useUpdateEffect(() => {
 * console.log("Component updated");
 * }, [prop1, prop2]);
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
