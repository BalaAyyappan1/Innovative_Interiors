"use client"
import OurServices from "@/components/Service/OurServices"
import Work from "@/components/Service/Work"
import Transform from "@/components/Service/Transform"
// import FooterImageService from "@/public/Group 39 (1).svg"
import Image from "next/image"
import MainLayout from "@/components/Layouts/MainLayout"
import ServiceBanner from "@/public/ServiceBanner.png";
import ServicesSection from "@/components/Service/ServicesSection"
import ServiceBottomImg from "@/public/ServiceBottomImg.png"

const ServicePage = () => {
  return (
    <MainLayout 
    heroImage={ServiceBanner} 
    title="Our Service"
    description="From concept to completion, we offer end-to-end interior and construction solutions tailored to your needs blending design, functionality, and craftsmanship every step of the way."
    >
      <div className="bg-[#FFFFFF]">
        <div className="p-10">
          <OurServices />
          <ServicesSection/>
          <Work />
          <Transform />
        </div>
        <Image
          src={ServiceBottomImg || "/placeholder.svg"}
          alt="Footer Image Service"
          className="w-full h-full object-cover"
        />
      </div>
    </MainLayout>
  )
}

export default ServicePage
