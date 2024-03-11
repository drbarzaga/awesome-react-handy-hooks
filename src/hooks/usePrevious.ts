// usePrevious.ts

import { useRef, useEffect } from "react";

/**
 * @description Custom hook to manage a previous value
 * @param {any} value - Value to store
 * @returns {any} - Previous value
 */

const usePrevious = (value: any): any => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
