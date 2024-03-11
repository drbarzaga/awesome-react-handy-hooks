// useTitle.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage the document title
 * @param {string} title - New title
 */

const useTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return;
};

export default useTitle;
