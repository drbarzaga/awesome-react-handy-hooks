// useHover.ts

import { useEffect } from "react";

/**
 * @description The useHover hook is used to check if the hover is inside an element and call a function when it is.
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
