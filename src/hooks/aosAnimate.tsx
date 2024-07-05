import React, { useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Callback = (...args: any[]) => Promise<any> | any | void;

export function useOnceCall(cb: Callback, condition = true) {
  const isCalledRef = React.useRef(false);

  React.useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
}

export const useAOSAnimation = (options = {}) => {
  const initializeAOS = useCallback(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
      ...options,
    });
    AOS.refresh();
  }, [options]);

  useOnceCall(initializeAOS);
};
