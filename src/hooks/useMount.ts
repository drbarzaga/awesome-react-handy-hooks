// useMount.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage a mount event
 * @param {Function} callback - Function to execute on mount
 * @returns {void}
 */

const useMount = (callback: Function): void => {
  useEffect(() => {
    callback();
  }, []);

  return;
};

export default useMount;
