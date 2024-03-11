// useToggle.ts

import { useState } from "react";

/**
 * @description Custom hook to manage a boolean toggle
 * @param {boolean} initialValue - Initial value of the toggle
 * @returns {object} - Toggle state and function to manage it
 */
export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return { value, toggle };
};
