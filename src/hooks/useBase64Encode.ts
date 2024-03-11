// useBase64Encode.ts

import { useState } from "react";

/**
 * @description The useBase64Encode hook is used to encode a string to base64.
 * @returns {string} - Encoded string
 * @example
 * const { encoded, encode } = useBase64Encode();
 */

const useBase64Encode = () => {
  const [encoded, setEncoded] = useState<string>("");

  const encode = (str: string) => {
    setEncoded(btoa(str));
  };

  return { encoded, encode };
};

export default useBase64Encode;
