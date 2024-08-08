import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="min-h-full flex items-center justify-center bg-black text-white pt-20 pb-6">
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex gap-8 items-center justify-center">
        <Image src="/assets/Logo.png" width={50} height={50} alt="logo" />
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="flex items-center justify-center">
        Copyright &copy; 2024, All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
