// useIntersectionObserver.ts

import { useEffect, useState } from "react";

/**
 * @description The useIntersectionObserver hook is used to observe an element's intersection details.
 * @returns {object} - Intersection details
 * @example
 * const elementRef = useRef(null);
 * const options = {
 *  root: null,
 *  rootMargin: "0px",
 *  threshold: 1.0,
 * };
 *
 * const intersection = useIntersectionObserver(elementRef, options);
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
