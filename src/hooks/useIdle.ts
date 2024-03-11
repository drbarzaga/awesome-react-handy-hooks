// useIdle.ts

import { useEffect, useState } from "react";

/**
 * @description The useIdle hook is used to check if the user is idle.
 * @param {number} delay - Time in milliseconds
 * @returns {boolean} - Idle state
 * @example
 * const isIdle = useIdle(1000);
 */
const useIdle = (delay: number) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const onEvent = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, delay);
    };

    onEvent();

    window.addEventListener("mousemove", onEvent);
    window.addEventListener("keypress", onEvent);

    return () => {
      window.removeEventListener("mousemove", onEvent);
      window.removeEventListener("keypress", onEvent);
    };
  }, [delay]);

  return isIdle;
};

export default useIdle;
