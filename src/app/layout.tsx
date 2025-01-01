import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Ayo  Call Center",
  description: "CAAS",
};

const poppins = Poppins({subsets:['latin'], weight:['100','200','300','400','500','600','700','800','900']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col justify-between `}
      >
        <Navbar />
        <div className='py-[5%] md:py-[5%]   h-auto md:h-[100%]'>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
