// useClickInside.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage a click inside an element
 * @param {HTMLElement} element - Element to check if the click is inside
 * @param {function} callback - Function to call when the click is inside the element
 * @returns {void}
 */
const useClickInside = (element: HTMLElement, callback: () => void): void => {
  const handleClick = (e: MouseEvent): void => {
    if (element && element.contains(e.target as Node)) {
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

export default useClickInside;
