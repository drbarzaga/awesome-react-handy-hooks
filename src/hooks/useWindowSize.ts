// useWindowSize.ts

import { useState, useEffect } from "react";

/**
 * @description Custom hook to manage the window size
 * @returns {Array<number>} - Width and height of the window
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
