"use client";

import { useContext, useRef } from "react";
import s from "../app/skills.module.css";
import { ScrollContext } from "@/utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(
      numOfPages - 0.5,
      Math.max(0.5, percentY * numOfPages)
    );
  }

  return (
    <div ref={refContainer} className="bg-black text-yellow-300">
      <div className="min-h-screen max-w-6xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText }
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Votre satisfaction est notre priorité.
          </div>
          <span
            className={`${s.skillText } inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            Notre studio de design graphique & digital, est à votre écoute pour
            mettre en place votre stratégie digitale en commençant par la{" "}
            <strong>conception de votre Marque:</strong> logo, carte visite,
            flyer, brochures…
          </span>
          <br />
          <span
            className={`${s.skillText } inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            <strong>Jusqu&apos;au site web:</strong> conception, développement,
            mise en ligne et référencement.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
