// useCopyToClipboard.ts

import { useState } from "react";

/**
 * @description The useCopyToClipboard hook is used to copy a string to the clipboard.
 * @returns {object} - Copy state and function to copy a string
 * @example
 * const { copied, copyToClipboard } = useCopyToClipboard();
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
