import Image from "next/image";

const Masthead = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/bubbles-loop.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`flex-grow-0 z-10 pt-6 transition-opacity duration-1000`}>
        <Image
          src="/assets/Logo.png"
          alt="logo"
          width={200 / 2}
          height={200 / 2}
        />
      </div>
      <div className="text-black p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center flex-1">
        <h1 className="mb-6 text-4xl xl:text-5xl">Intuitive Design</h1>
        <h2 className="mb-4 text-2xl xl:text-3xl tracking-tight">
          <span>Design,</span> <span>done right.</span>
        </h2>
      </div>
      <div className="flex-grow-0 z-10 pb-5 md:pb-2 transition-all duration-1000">
        <Image
          src="/assets/down-arrow.png"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
        />
      </div>
    </div>
  );
};

export default Masthead;
