"use client";

import { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer";

const Masthead = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/bubbles-loop.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`flex-grow-0 z-10 pt-6 transition-opacity duration-1000 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <Image
          src="/assets/Logo.png"
          alt="logo"
          width={200 / 2}
          height={200 / 2}
        />
      </div>
      <div className="text-black p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center flex-1">
        <h1 className="mb-6 text-4xl xl:text-5xl">Intuitive Design</h1>
        <h2 className="mb-4 text-2xl xl:text-3xl tracking-tight">
          <span>Design,</span> <span>done right.</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 z-10 pb-5 md:pb-2 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/down-arrow.png"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
