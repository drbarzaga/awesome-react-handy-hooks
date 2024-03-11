// useCounter.ts

import { useState } from "react";

/**
 * @description The useCounter hook is used to manage a counter state and its functions to increment and decrement it.
 * @param {number} initialValue - Initial value of the counter
 * @returns {object} - Counter state and functions to manage it
 */
export const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};
