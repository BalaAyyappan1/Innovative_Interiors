"use client"

import Image from "next/image"
import { Picture, RightArrow } from "../ReusableComponenets/Icons"
import ArrowBtn from "../ui/arrowBtn"
import Link from "next/link"

const Production = () => {
  return (
    <div className="production-section md:mb-[150px] z-20 relative md:mt-48">
      <section className="bg-white">
        <Image
          src={Picture || "/placeholder.svg?height=593&width=1200"}
          alt="picture"
          className="w-full h-[593px] object-cover"
        />

        <div className="flex md:flex-row flex-col md:justify-between space-y-5 md:space-y-0 justify-center items-center md:px-5 px-3  mt-10">
          <div className="flex  items-center justify-center w-full md:w-auto h-full">
            <p className="text-[11px] md:text-[36.69px] md:text-start text-center md:leading-[53.8px] text-[#202022] md:tracking-[-1.44px]  md:w-[1000px]">
              Our Sprawling 1,00,000 Sq. Ft. Production Facility, Spread Across  11 Acres — With Exciting
              Developments Underway.
            </p>
          </div>
          
          <ArrowBtn backgroundColor="#040444" text="Let's Talk!" href="/vendors"/>
        
        </div>
      </section>
    </div>
  )
}

export default Production;