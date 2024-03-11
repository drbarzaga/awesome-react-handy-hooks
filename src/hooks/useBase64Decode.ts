// useBase64Decode.ts

import { useState } from "react";

/**
 * @description Custom hook to decode a Base64 string
 * @returns {string} - Decoded string
 */
const useBase64Decode = () => {
  const [decoded, setDecoded] = useState<string>("");

  const decode = (str: string) => {
    setDecoded(atob(str));
  };

  return { decoded, decode };
};

export default useBase64Decode;
