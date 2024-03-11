// useMediaQuery.ts

import { useEffect, useState } from "react";

/**
 * @description The useMediaQuery hook is used to check if a media query matches.
 * @param {string} query - Media query to check
 * @returns {boolean} - Boolean indicating if the media query matches
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 */

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleMatchChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleMatchChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMatchChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
