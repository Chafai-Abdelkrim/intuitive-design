import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/utils/scroll-observer";
import SizeObserver from "@/utils/size-observer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intuitive Design - studio.",
  description: "The website for the Intuitive design agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SizeObserver>
          <ScrollObserver>{children}</ScrollObserver>
        </SizeObserver>
      </body>
    </html>
  );
}
