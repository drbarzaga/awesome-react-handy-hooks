// useScroll.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to detect scroll position
 * @returns {object} - Scroll position
 */
const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scroll;
};

export default useScroll;
