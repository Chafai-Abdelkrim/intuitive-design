"use client"

import { createContext, useCallback, useEffect, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({ scrollY: 0 });

const ScrollObserver = ({children}: {children: React.ReactNode}) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
