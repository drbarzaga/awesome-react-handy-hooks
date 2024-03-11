// useGeolocation.ts

import { useEffect, useState } from "react";

/**
 * @description The useGeolocation hook is used to get the geolocation of the user.
 * @returns {object} - Geolocation
 * @example
 * const { latitude, longitude } = useGeolocation();
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
