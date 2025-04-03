import TopNav from "@/components/ReusableComponenets/TopNav";
import Image from "next/image";
import Footer from "@/components/ReusableComponenets/Footer";
import Hero from "@/components/Home/Hero";
import Clients from "@/components/Home/Clients";
import Service from "@/components/Home/Service";
import Future from "@/components/Home/Future";
import { footerImage1 } from "@/components/ReusableComponenets/Icons";
import VideoAnimation from './../components/Home/videoAnimation'; // Change to capitalized name
import VideoScrubber from "./../components/Home/videoAnimation";
import Production from "@/components/Home/Production";
import Stories from "@/components/Home/Stories";
import MobileFooter from "@/components/ReusableComponenets/MobileFooter";
export default function Home() {
  return (
   <div className="bg-white p-5 overflow-x-hidden">
    <Hero />
    <Clients />

    <VideoScrubber />
    <Production />
    <Service /> 
    <Stories />
    <Future />

    <Image src={footerImage1} alt="footer image 1"  className="w-full h-full object-cover"/>
    <div className="hidden lg:block">
        <Footer />
      </div>
      
      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
   </div>
  );
}
