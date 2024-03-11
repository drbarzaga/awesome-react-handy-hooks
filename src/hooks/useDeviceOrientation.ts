// useDeviceOrientation.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to detect device orientation
 * @returns {object} - Device orientation
 */
const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const onDeviceOrientation = ({
    alpha,
    beta,
    gamma,
  }: DeviceOrientationEvent) => {
    if (alpha && beta && gamma) {
      setOrientation({ alpha, beta, gamma });
    }
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", onDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", onDeviceOrientation);
    };
  }, []);

  return orientation;
};

export default useDeviceOrientation;
