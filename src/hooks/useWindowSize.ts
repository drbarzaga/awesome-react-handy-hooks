// useWindowSize.ts

import { useState, useEffect } from "react";

/**
 * @description The useWindowSize hook is used to get the width and height of the window and update it on resize.
 * @returns {Array<number>} - Width and height of the window
 * @example
 * const size = useWindowSize();
 */

const useWindowSize = (): Array<number> => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
