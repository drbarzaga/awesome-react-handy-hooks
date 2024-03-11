// useUnmount.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage an unmount event
 * @param {Function} callback - Function to execute on unmount
 * @returns {void}
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
