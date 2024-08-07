import Carousel from "./carousel";
import CarouselItem from "./carousel-item";

const Testimonials = () => {

    return (
        <Carousel className="bg-black text-white py-10 lg:py-20">
            <CarouselItem index={1}>
                <div>Review 1</div>
            </CarouselItem>
        </Carousel>
    )
}

export default Testimonials;