import Hero from "@/components/Manufacturing/Hero";
import Tower from "@/components/Manufacturing/Tower";
import React from "react";
import Excellence from "./../../components/Manufacturing/Excellence";
import Footer from "@/components/ReusableComponenets/Footer";
import { FooterManuImage } from "@/components/ReusableComponenets/Icons";
import Image from "next/image";
import Content from "@/components/Manufacturing/Content";
import MobileFooter from "@/components/ReusableComponenets/MobileFooter";

const page = () => {
  return (
    <div className="bg-white  overflow-x-hidden">
      <div className="p-5">
      <Hero />
      <Content />
      <Tower />
      <Excellence />
      </div>

      <Image src={FooterManuImage} alt={"alt"} />
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
    </div>
  );
};

export default page;
