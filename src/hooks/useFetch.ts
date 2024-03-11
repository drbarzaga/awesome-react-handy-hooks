// useFetch.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to fetch data from an API
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {object} - Data, loading, and error
 */

const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
