// useScript.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to manage the loading of a script
 * @param {string} src - URL of the script to load
 * @returns {boolean} - Loading status
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
