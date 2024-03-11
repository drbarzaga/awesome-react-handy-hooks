// useDialog.ts

import { useState } from "react";

/**
 * @description The useDialog hook is used to manage a dialog state and its functions to open and close it.
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
