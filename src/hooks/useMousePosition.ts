// useMousePosition.ts

import { useState, useEffect } from "react";

/**
 * @description The useMousePosition hook is used to get the current mouse position.
 * @returns {object} - Mouse position state
 * @example
 * const { x, y } = useMousePosition();
 */

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export default useMousePosition;
