// useCopyToClipboard.ts

import { useState } from "react";

/**
 * @description Custom hook to copy a string to the clipboard
 * @returns {object} - Copy state and function to copy a string
 */

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return { copied, copyToClipboard };
};

export default useCopyToClipboard;
