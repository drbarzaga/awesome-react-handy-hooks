// useFocus.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage a focus event
 * @param {HTMLElement} element - Element to check if the focus is inside
 * @param {function} callback - Function to call when the focus is inside the element
 * @returns {void}
 */
const useFocus = (element: HTMLElement, callback: () => void): void => {
  const handleFocus = (): void => {
    callback();
  };

  useEffect(() => {
    element.addEventListener("focus", handleFocus);
    return (): void => {
      element.removeEventListener("focus", handleFocus);
    };
  });
};

export default useFocus;
