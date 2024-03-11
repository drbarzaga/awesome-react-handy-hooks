// useToggle.ts

import { useState } from "react";

/**
 * @description The useToggle hook is used to manage a toggle state and its function to change it.
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
