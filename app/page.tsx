import TopNav from "@/components/ReusableComponenets/TopNav";
import Image from "next/image";
import Footer from "@/components/ReusableComponenets/Footer";
import Hero from "@/components/Home/Hero";
import Clients from "@/components/Home/Clients";
import Service from "@/components/Home/Service";
import Future from "@/components/Home/Future";
import { footerImage1 } from "@/components/ReusableComponenets/Icons";
import VideoAnimation from './../components/Home/videoAnimation'; // Change to capitalized name

export default function Home() {
  return (
   <div className="bg-white">
    <Hero />
    <VideoAnimation />
    <Clients />
    <Service />
    <Future />
    <Image src={footerImage1} alt="footer image 1" />
    <Footer />
   </div>
  );
}
