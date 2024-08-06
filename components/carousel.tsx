import useEmblaCarousel, { UseEmblaCarouselType }  from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
import { createContext, useState } from "react"
import styles from "../app/carousel.module.css"

interface ContextValue {
    embla: UseEmblaCarouselType | undefined
    selectedIndex: number
}

interface Props {
    className?: string
    children: React.ReactNode
}

export const CarouselContext = createContext<ContextValue>({
    embla: undefined,
    selectedIndex: -1
})

const Carousel = ({ children, className }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewportRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,

    }, [ClassNames(), Autoplay()])

    return (
        <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
            <div ref={viewportRef} className={`${styles.viewport} w-full overflow-hidden ${className}`}>
                <div className={`${styles.container} flex`}>
                   {children} 
                </div>
                
            </div>
        </CarouselContext.Provider>
    )
}

export default Carousel;