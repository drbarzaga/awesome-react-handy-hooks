// useKeyPress.ts

import { useEffect, useState } from "react";

/**
 * @description The useKeyPress hook is used to detect if a key is pressed.
 * @param {string} targetKey - Key to detect
 * @returns {boolean} - Whether the key is pressed
 * @example
 * const isKeyPressed = useKeyPress("a");
 */

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
