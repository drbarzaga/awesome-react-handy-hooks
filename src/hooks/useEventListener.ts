// useEventListener.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage an event listener
 * @param {string} eventName - Name of the event to listen for
 * @param {Function} handler - Function to execute on event
 * @param {any} element - Element to attach the event listener to
 * @returns {void}
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
