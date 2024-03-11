// useUnmount.ts

import { useEffect } from "react";

/**
 * @description The useUnmount hook is used to execute a function on unmount.
 * @param {Function} callback - Function to execute on unmount
 * @returns {void}
 * @example
 * useUnmount(() => {
 * console.log("Component unmounted");
 * });
 */

const useUnmount = (callback: Function): void => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);

  return;
};

export default useUnmount;
