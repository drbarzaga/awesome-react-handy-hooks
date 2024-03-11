// useThrottle.ts

import { useState, useEffect } from "react";

/**
 * @description The useThrottle hook is used to throttle a value.
 * @param {any} value - Value to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {any} - Throttled value
 * @example
 * const throttledValue = useThrottle(value, 1000);
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
