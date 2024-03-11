// useStyle.ts

import { useState, useEffect } from "react";

/**
 * @description The useStyle hook is used to load a stylesheet and manage its loading status.
 * @param {string} href - URL of the stylesheet to load
 * @returns {boolean} - Loading status
 * @example
 * const loading = useStyle("https://example.com/style.css");
 */

const useStyle = (href: string): boolean => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = href;
    link.rel = "stylesheet";

    link.onload = () => {
      setLoading(false);
    };

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href]);

  return loading;
};

export default useStyle;
