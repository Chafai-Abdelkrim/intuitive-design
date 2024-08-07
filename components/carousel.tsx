import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { createContext, useCallback, useEffect, useState } from "react";
import styles from "../app/carousel.module.css";

interface ContextValue {
  embla: UseEmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CarouselContext = createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel = ({ children, className }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${styles.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
