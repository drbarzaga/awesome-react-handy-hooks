// useIntersectionObserver.ts

import { useEffect, useState } from "react";

/**
 * @description Custom hook to detect intersection of an element
 * @returns {object} - Intersection details
 */

const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit
) => {
  const [intersection, setIntersection] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersection(entry);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return intersection;
};

export default useIntersectionObserver;
