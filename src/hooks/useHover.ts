// useHover.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage a hover event
 * @param {HTMLElement} element - Element to check if the hover is inside
 * @param {function} callback - Function to call when the hover is inside the element
 * @returns {void}
 */
const useHover = (element: HTMLElement, callback: () => void): void => {
  const handleMouseOver = (): void => {
    callback();
  };

  useEffect(() => {
    element.addEventListener("mouseover", handleMouseOver);
    return (): void => {
      element.removeEventListener("mouseover", handleMouseOver);
    };
  });
};

export default useHover;
