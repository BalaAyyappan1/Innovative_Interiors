"use client"

import Content from "@/components/About/Content"
import Clients from "@/components/About/Clients"
import Process from "@/components/About/Process"
// import { AboutFooterImage, AboutHero } from "@/components/ReusableComponenets/Icons"
import AboutBottomImg from "@/public/AboutBottomImg.png"
import Image from "next/image"
import MainLayout from "@/components/Layouts/MainLayout"
import Chair from "@/components/About/Chair"
import TurnoverChartWithControls from "@/components/About/TurnoverChartWithControls"
import ManagementTeam from "@/components/About/ManagementTeam"
import TeamStrength from "@/components/About/TeamStrength"
import AboutBanner from "@/public/AboutBanner.png"


const AboutPage = () => {
  return (
    <MainLayout
      heroImage={AboutBanner}
      title="About us"
      description="Innovative Interiors brings architect-designed spaces to life with expert execution and fine woodworking—where craftsmanship meets creativity."
    >
      <div className="bg-white">
        <div className="p-10">
          <Content />
          <Clients />
          {/* <Projects /> */}
          <Chair/>
          <TeamStrength/>
          <ManagementTeam/>
          <Process />
          <TurnoverChartWithControls/>
        </div>
        <Image src={AboutBottomImg || "/placeholder.svg"} alt="footer image" className="w-full h-full object-cover " />
      </div>
    </MainLayout>
  )
}

export default AboutPage
