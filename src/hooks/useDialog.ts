// useDialog.ts

import { useState } from "react";

/**
 * @description Custom hook to manage a dialog
 * @param {boolean} initialValue - Initial value of the dialog
 * @returns {object} - Dialog state and functions to manage it
 */
export const useDialog = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const open = () => {
    setValue(true);
  };

  const close = () => {
    setValue(false);
  };

  return { value, open, close };
};
