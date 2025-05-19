"use client"
import Careers from "@/components/Careers/Careers"
import ScrollImage from "@/components/Careers/ScrollImage"
import Journey from "@/components/Careers/Journey"
import ApplyHere from "@/components/Careers/ApplyHere"
import Image from "next/image"
// import footerImagecarrer from "@/public/Group 39 (1).png"
import CarreerBottomImg from "@/public/CarreerBottomImg.png"
import MainLayout from "@/components/Layouts/MainLayout"
import CareerBanner from "@/public/CareerBanner.png";
import CareerCards from "@/components/Careers/CareerCards"

const CareersPage = () => {
  return (
    <MainLayout
      heroImage={CareerBanner}
      title="Build your future with us"
      description="Join a team where creativity meets purpose. At Innovative Interiors, we empower you to grow, create, and make a lasting impact."
    >
      <div className="bg-white overflow-x-hidden">
        <div className="p-5">
          {/* <Careers /> */}
          <CareerCards/>
          <ScrollImage />
          <Journey />
          <ApplyHere />
        </div>
        <Image
          src={CarreerBottomImg || "/placeholder.svg"}
          alt="footer image"
          className="w-full h-full object-cover"
        />
      </div>
    </MainLayout>
  )
}

export default CareersPage
