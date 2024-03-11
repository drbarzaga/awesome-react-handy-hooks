// useLocalStorage.ts

import { useState } from "react";

/**
 * @description Custom hook to manage a local storage value
 * @param {string} key - Key to store the value in local storage
 * @param {string} initialValue - Initial value of the local storage
 * @returns {object} - Local storage state and functions to manage it
 */
const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  const setLocalStorage = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return { value, setLocalStorage };
};

export default useLocalStorage;
