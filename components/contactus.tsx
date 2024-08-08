import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen">
        <div className="pb-10">
            <Image src="/assets/Logo.png" width={65} height={65} alt="logo" />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
    </div>
  );
};

export default ContactUs;
