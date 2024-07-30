import Image from "next/image";
import SliderContainer from "./slider";

const ClientLogos = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <Image
        src={"/assets/trustedby/img1.png"}
        width={150}
        height={50}
        alt=""
        objectFit="contain"
      />
      <Image
        src={"/assets/trustedby/img1.png"}
        width={150}
        height={50}
        alt=""
        objectFit="contain"
      />
      <Image
        src={"/assets/trustedby/img1.png"}
        width={150}
        height={50}
        alt=""
        objectFit="contain"
      />
      <Image
        src={"/assets/trustedby/img1.png"}
        width={150}
        height={50}
        alt=""
        objectFit="contain"
      />
    </SliderContainer>
  </>
);

export default ClientLogos;
