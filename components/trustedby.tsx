import ClientLogos from "./client-logos";
import Testimonials from "./testimonials";
import s from "../app/trustedby.module.css";

const TrustedBy = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}
  >
    <div className="flex-1"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 px-4 font-bold text-center">
        <div className="text-3xl pb-4 whitespace-nowrap">NOS CLIENTS</div>
        <span className="whitespace-normal">
          Plus de 50 clients nous font confiance.
        </span>
      </h3>
      <ClientLogos />
    </div>
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
          Nous croyons en une bonne communication et un processus totalement transparent.
        </h3>
      </div>
    </div>
    <Testimonials />
    <div className="flex-1 bg-black"></div>
  </section>
);

export default TrustedBy;
