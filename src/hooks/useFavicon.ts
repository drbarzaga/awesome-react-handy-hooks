// useFavicon.ts

import { useEffect } from "react";

/**
 * @description Custom hook to manage the favicon
 * @param {string} href - URL of the favicon
 */
const useFavicon = (href: string): void => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = href;
    link.rel = "icon";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href]);

  return;
};

export default useFavicon;
