import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/img1.png"}
          width={150}
          height={50}
          alt=""
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/img1.png"}
          width={150}
          height={50}
          alt=""
          objectFit="contain"
        />
      </SliderItem><SliderItem width={150}>
        <Image
          src={"/assets/trustedby/img1.png"}
          width={150}
          height={50}
          alt=""
          objectFit="contain"
        />
      </SliderItem>
      
    </SliderContainer>
  </>
);

export default ClientLogos;
