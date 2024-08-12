import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos = () => (
  <>
    <SliderContainer className="max-w-[1200px]" contentWidth={2000} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Logo-Bayer.png"}
          width={150}
          height={50}
          alt="Bayer logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Atlantic-hotel-logo.png"}
          width={150}
          height={50}
          alt="Atlantic hotel logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Damsa-hover.png"}
          width={150}
          height={50}
          alt="Damsa logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/logo_UIZ.png"}
          width={150}
          height={50}
          alt="ibn zohr logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/logo-Bg-invest.png"}
          width={150}
          height={50}
          alt="BG invest logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Logo-Clause.png"}
          width={150}
          height={50}
          alt="Clause logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Logo-ELEPHANT-VERT.png"}
          width={150}
          height={50}
          alt="elephant vert logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/logo-ewa.png"}
          width={150}
          height={50}
          alt="EWA logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/logo-ONP.png"}
          width={150}
          height={50}
          alt="ONP logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Logo-Orbis.png"}
          width={150}
          height={50}
          alt="Orbis logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Logo-SEMINIS.png"}
          width={150}
          height={50}
          alt="Seminis logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={"/assets/trustedby/Logo-syngenta.png"}
          width={150}
          height={50}
          alt="Syngenta logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
