import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials = () => {

    return (
        <Carousel className="bg-black text-white py-10 lg:py-20">
            <CarouselItem index={0}>
                <Review by="Name 1 (company name)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto? Recusandae voluptas possimus delectus fugiat</Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="Name 1 (company name)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto? Recusandae voluptas possimus delectus fugiat</Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="Name 1 (company name)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto? Recusandae voluptas possimus delectus fugiat</Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by="Name 1 (company name)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto? Recusandae voluptas possimus delectus fugiat</Review>
            </CarouselItem>
            <CarouselItem index={4}>
                <Review by="Name 1 (company name)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto? Recusandae voluptas possimus delectus fugiat</Review>
            </CarouselItem>
        </Carousel>
    )
}

export default Testimonials;