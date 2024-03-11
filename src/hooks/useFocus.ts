// useFocus.ts

import { useEffect } from "react";

/**
 * @description The useFocus hook is used to check if the focus is inside an element and call a function when it is.
 * @param {HTMLElement} element - Element to check if the focus is inside
 * @param {function} callback - Function to call when the focus is inside the element
 * @example
 * useFocus(element, () => {
 *  console.log("The focus is inside the element");
 * });
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
