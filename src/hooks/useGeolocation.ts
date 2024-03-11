// useGeolocation.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to detect geolocation
 * @returns {object} - Geolocation
 */
const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const onGeolocation = ({ coords }: GeolocationPosition) => {
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(onGeolocation);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return location;
};

export default useGeolocation;
