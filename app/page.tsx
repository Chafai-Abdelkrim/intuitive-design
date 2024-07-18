import Image from "next/image";
import Masthead from "@/components/masthead";
import AboutUs from "@/components/aboutus";
import Skills from "@/components/skills";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
    </>
  );
}
