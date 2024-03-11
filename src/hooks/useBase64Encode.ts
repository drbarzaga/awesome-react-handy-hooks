// useBase64Encode.ts

import { useState } from "react";

/**
 * @description Custom hook to encode a string to Base64
 * @returns {string} - Encoded string
 */

const useBase64Encode = () => {
  const [encoded, setEncoded] = useState<string>("");

  const encode = (str: string) => {
    setEncoded(btoa(str));
  };

  return { encoded, encode };
};

export default useBase64Encode;
