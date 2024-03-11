// useDeviceMotion.ts

import { useEffect, useState } from "react";

/**
 * @description The useDeviceMotion hook is used to get the device motion.
 * @returns {object} - Device motion
 * @example
 * const { x, y, z } = useDeviceMotion();
 */
const useDeviceMotion = () => {
  const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });

  const onDeviceMotion = ({
    accelerationIncludingGravity,
  }: DeviceMotionEvent) => {
    setMotion({
      x: accelerationIncludingGravity?.x ?? 0,
      y: accelerationIncludingGravity?.y ?? 0,
      z: accelerationIncludingGravity?.z ?? 0,
    });
  };

  useEffect(() => {
    window.addEventListener("devicemotion", onDeviceMotion);

    return () => {
      window.removeEventListener("devicemotion", onDeviceMotion);
    };
  }, []);

  return motion;
};
