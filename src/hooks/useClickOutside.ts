// useClickOutside.ts

import { useEffect } from "react";

/**
 * @description The useClickOutside hook is used to check if the click is outside an element and call a function when it is.
 * @param {HTMLElement} element - Element to check if the click is outside
 * @param {function} callback - Function to call when the click is outside the element
 * @returns {void}
 */
const useClickOutside = (element: HTMLElement, callback: () => void): void => {
  const handleClick = (e: MouseEvent): void => {
    if (element && !element.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return (): void => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;
