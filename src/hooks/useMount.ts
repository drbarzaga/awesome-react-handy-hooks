// useMount.ts

import { useEffect } from "react";

/**
 * @description The useMount hook is used to execute a function on mount.
 * @param {Function} callback - Function to execute on mount
 * @returns {void}
 * @example
 * useMount(() => {
 * console.log("Component mounted");
 * });
 */

const useMount = (callback: Function): void => {
  useEffect(() => {
    callback();
  }, []);

  return;
};

export default useMount;
