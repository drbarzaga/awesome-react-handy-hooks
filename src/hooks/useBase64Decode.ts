// useBase64Decode.ts

import { useState } from "react";

/**
 * @description The useBase64Decode hook is used to decode a base64 string.
 * @returns {string} - Decoded string
 * @example
 * const { decoded, decode } = useBase64Decode();
 */
const useBase64Decode = () => {
  const [decoded, setDecoded] = useState<string>("");

  const decode = (str: string) => {
    setDecoded(atob(str));
  };

  return { decoded, decode };
};

export default useBase64Decode;
