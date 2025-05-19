"use client"
import Content from "@/components/Projects/Content"
import Gallery from "@/components/Projects/Gallery"
import Chair from "@/components/About/Chair"
import Image from "next/image"
// import FooterProjectImage from "@/public/Group 39.png"
import MainLayout from "@/components/Layouts/MainLayout"
import ProjectBottomImg from "@/public/ProjectBottomImg.png"
// import heroImageprojects from '@/public/A07I9078 1.svg';
import ProjectBanner from "@/public/ProjectBanner.png";
import InfoBanner from "@/components/ReusableComponenets/InfoBanner"
import ProjectInfoBanner from "@/public/ProjectInfoBanner.png";


const ProjectsPage = () => {
  return (
    <MainLayout 
    heroImage={ProjectBanner} 
    title="View our Project"
    description="Explore our portfolio of thoughtfully executed spaces that showcase our commitment to quality, innovation, and timeless design."
    >
      <div className="bg-white overflow-hidden">
        <div className="px-10">
          <Content />
          <Gallery />
          <InfoBanner backgroundImage={ProjectInfoBanner}/>
        </div>
        <Image
          src={ProjectBottomImg || "/placeholder.svg"}
          alt="Footer Project Image"
          className="w-full h-full object-cover"
        />
      </div>
    </MainLayout>
  )
}

export default ProjectsPage
