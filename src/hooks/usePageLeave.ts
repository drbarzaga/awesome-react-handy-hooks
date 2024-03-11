// usePageLeave.ts

import { useEffect } from "react";

/**
 * @description The usePageLeave hook is used to execute a function when the user leaves the page.
 * @param {function} callback - Callback function to execute when the user leaves the page
 * @example
 * usePageLeave(() => {
 * console.log("The user left the page");
 * });
 */
const usePageLeave = (callback: () => void) => {
  useEffect(() => {
    const handlePageLeave = (event: any) => {
      if (typeof callback === "function") {
        callback();
      }
    };

    window.addEventListener("beforeunload", handlePageLeave);

    return () => {
      window.removeEventListener("beforeunload", handlePageLeave);
    };
  }, [callback]);
};

export default usePageLeave;
