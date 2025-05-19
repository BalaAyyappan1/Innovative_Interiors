"use client"

// import { HomeImage } from "@/components/ReusableComponenets/Icons"
import HomeBanner from "@/public/HomeBanner.png"
import Clients from "@/components/Home/Clients"
import Service from "@/components/Home/Service"
import Future from "@/components/Home/Future"
import { footerImage1 } from "@/components/ReusableComponenets/Icons"
import VideoScrubber from "@/components/Home/videoAnimation"
import Production from "@/components/Home/Production"
import Stories from "@/components/Home/Stories"
import Image from "next/image"
import MainLayout from "@/components/Layouts/MainLayout"
import HomeBottomImg from "@/public/HomeBottomImg.png"

export default function Home() {
  return (
    <MainLayout 
    heroImage={HomeBanner} 
    heroText="Turnkey Contracting |Civil Construction |Woodwork Mastery | Timeless Interiors"
    >
      <div className="bg-white overflow-x-hidden">
        <div className="p-5">
          <VideoScrubber />
          <Clients />
        </div>

        <Production />

        <div className="p-5">
          <Service />
          <Stories />
          <Future />
        </div>

        <Image src={HomeBottomImg || "/placeholder.svg"} alt="footer image" className="w-full h-full mt-52 object-cover" />
      </div>
    </MainLayout>
  )
}
