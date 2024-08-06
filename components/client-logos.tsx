import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/ibnzohr.png"}
          width={150}
          height={50}
          alt="ibn zohr"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/ensa.png"}
          width={150}
          height={50}
          alt="ENSA"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={130}>
        <Image
          src={"/assets/trustedby/atlantic-hotel.png"}
          width={120}
          height={50}
          alt="Atlantic Hotel"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/ewa.ico"}
          width={90}
          height={50}
          alt="ewa"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={120}>
        <Image
          src={"/assets/trustedby/seminis.jpg"}
          width={120}
          height={50}
          alt="seminis"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/comaprim.png"}
          width={150}
          height={50}
          alt="seminis"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={90}>
        <Image
          src={"/assets/trustedby/elephant-vert.jpg"}
          width={120}
          height={50}
          alt="elephant vert"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/acacia-decor.jpg"}
          width={150}
          height={50}
          alt="seminis"
          objectFit="contain"
        />
      </SliderItem>
      
    </SliderContainer>
  </>
);

export default ClientLogos;
