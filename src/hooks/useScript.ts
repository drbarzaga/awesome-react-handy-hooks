// useScript.ts

import { useEffect, useState } from "react";

/**
 * @description The useScript hook is used to load a script and manage its loading status.
 * @param {string} src - URL of the script to load
 * @returns {boolean} - Loading status
 * @example
 * const loading = useScript("https://example.com/script.js");
 */
const useScript = (src: string): boolean => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = () => {
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return loading;
};

export default useScript;
