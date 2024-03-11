// useMediaQuery.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to manage a media query
 * @param {string} query - Media query to check
 * @returns {boolean} - Boolean indicating if the media query matches
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
