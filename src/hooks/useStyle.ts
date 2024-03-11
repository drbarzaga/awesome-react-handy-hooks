// useStyle.ts

import { useState, useEffect } from "react";

/**
 * @description Custom hook to manage the loading of a stylesheet
 * @param {string} href - URL of the stylesheet to load
 * @returns {boolean} - Loading status
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
