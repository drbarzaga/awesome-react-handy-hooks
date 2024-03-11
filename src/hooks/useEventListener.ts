// useEventListener.ts

import { useEffect } from "react";

/**
 * @description The useEventListener hook is used to listen for events on an element and call a function when the event is triggered.
 * @param {string} eventName - Name of the event to listen for
 * @param {Function} handler - Function to execute on event
 * @param {any} element - Element to attach the event listener to
 * @returns {void}
 * @example
 * useEventListener("click", () => {
 * console.log("The document was clicked");
 * }, document);
 */

const useEventListener = (
  eventName: string,
  handler: Function,
  element: any = window
): void => {
  useEffect(() => {
    if (!element) return;

    element.addEventListener(eventName, handler);

    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element]);

  return;
};

export default useEventListener;
