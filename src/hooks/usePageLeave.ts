// usePageLeave.ts

import { useEffect } from "react";

/**
 * @description Custom hook to detect when the user leaves the page
 * @param {function} callback - Callback function to execute when the user leaves the page
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
