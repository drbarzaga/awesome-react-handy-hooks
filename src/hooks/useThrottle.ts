// useThrottle.ts

import { useState, useEffect } from "react";

/**
 * @description Custom hook to throttle a value
 * @param {any} value - Value to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {any} - Throttled value
 */

const useThrottle = (value: any, delay: number): any => {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
