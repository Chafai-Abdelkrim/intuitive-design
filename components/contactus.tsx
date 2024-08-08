import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-8">
        <div className="pb-10">
          <Image src="/assets/Logo.png" width={65} height={65} alt="logo" />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            placeholder="Company Name"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={128}
            placeholder="Your E-mail"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={1048956}
            placeholder="Additional information"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16rem]"
          ></textarea>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-white text-black rounded-3xl px-8 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
