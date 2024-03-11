// useTitle.ts

import { useEffect } from "react";

/**
 * @description The useTitle hook is used to change the title of the document.
 * @param {string} title - New title
 * @example
 * useTitle("New Title");
 */

const useTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return;
};

export default useTitle;
