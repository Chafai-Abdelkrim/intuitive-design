import Image from "next/image";
import Masthead from "@/components/masthead";
import AboutUs from "@/components/aboutus";
import Skills from "@/components/skills";
import Works from "@/components/works";
import TrustedBy from "@/components/trustedby";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  );
}
