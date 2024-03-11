// useLongPress.ts

import { useEffect, useRef } from "react";

/**
 * @description Custom hook to detect long press
 * @param {function} callback - Function to execute on long press
 * @param {number} duration - Duration of long press
 * @returns {object} - Reference to the element and the event listener
 */

const useLongPress = (callback: () => void, duration: number = 300) => {
  const timeout = useRef<NodeJS.Timeout>();

  const start = (event: React.MouseEvent | React.TouchEvent) => {
    if (!timeout.current) {
      timeout.current = setTimeout(() => {
        callback();
      }, duration);
    }
  };

  const stop = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    }
  };

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
};

export default useLongPress;
