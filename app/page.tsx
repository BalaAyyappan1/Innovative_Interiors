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

export default function Home() {
  return (
   <div className="bg-white overflow-x-hidden">
    <Hero />
    <Clients />

    <VideoScrubber />
    <Production />
    <Service />
    <Future />
    <Image src={footerImage1} alt="footer image 1" />
    <Footer />
   </div>
  );
}
