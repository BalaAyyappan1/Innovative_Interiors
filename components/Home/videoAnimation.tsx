"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { RightArrow } from "../ReusableComponenets/Icons"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const VideoAnimation = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check if we're on Safari
    const checkSafari = () => {
      const ua = navigator.userAgent.toLowerCase()
      return ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1
    }

    // Initial checks
    checkMobile()
    setIsSafari(checkSafari())

    // Listen for resize events
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const video = document.querySelector("video");
    const videoSection = document.querySelector(".video-section");
  
    if (video) {
      video.pause();
      video.setAttribute('playsinline', '');
      video.muted = true;
      video.currentTime = 0;
      video.preload = "auto";
    }
  
    // First ScrollTrigger for video scrubbing with pin
    const videoScrubber = ScrollTrigger.create({
      trigger: ".video-section",
      start: "center center",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.1,
      fastScrollEnd: true,
      onUpdate: (self) => {
        if (video) {
          if (self.progress <= 1) {
            requestAnimationFrame(() => {
              video.currentTime = (self.progress || 0) * video.duration;
            });
          }
        }
      },
      onLeave: () => {
        if (video) {
          video.currentTime = video.duration;
        }
        document.querySelector('.video-section')?.classList.add('video-fixed');
      },
      onEnterBack: () => {
        if (video) {
          video.currentTime = video.duration;
        }
        document.querySelector('.video-section')?.classList.remove('video-fixed');
      }
    });
  
    ScrollTrigger.create({
      trigger: ".video-section",
      start: () => videoScrubber.end,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      onToggle: ({ isActive }) => {
        videoSection?.classList.toggle("video-pinned", isActive);
        if (video && isActive) video.currentTime = video.duration;
      }
    });
  
    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile, isSafari]) 

  return (
    <div className="flex md:flex-row  flex-col space-y-5 justify-between   p-5 space-x-10   video-section z-50">
      <div className="md:w-[60%] w-full flex justify-center items-center">
        <video
          ref={videoRef}
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
          style={{
            willChange: "contents",
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Safari prefers MP4 in H.264 format */}
          <source src="/vd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        ref={contentRef}
        className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start space-y-5 md:space-y-10"
      >
        {/* Desktop content */}
        <div className="hidden md:block w-full">
          <div>
            <div className="flex justify-start">
              <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
                <ul className="list-disc pl-5 text-center">
                  <li>WHAT WE DO</li>
                </ul>
              </div>
            </div>
            <div className="text-[#040444] mt-2 w-full justify-start text-start items-center text-[38px] leading-[55.1px]">
              Shaping Future
              <br />
              Architecture
            </div>
            <div>
              <p className="text-[#141414] text-[20px] leading-[35px]">
                Elevate your spaces sustainably with Nilsson. Discover innovative modern designs for architecture,
                interior, and exterior.
              </p>
            </div>
          </div>

          <div className="flex-row flex items-center justify-start mt-10">
            <button className="bg-[#040444] text-[19.69px] w-[153px] h-[56px] text-white rounded-full whitespace-nowrap cursor-pointer hover:scale-104 transition-transform">
              Learn More
            </button>
            <a className="ml-4">
              <div className="w-[56px] h-[56px] bg-[#040444] rounded-full flex justify-center items-center hover:scale-104 transition-transform">
                <Image src={RightArrow || "/placeholder.svg"} alt="right arrow" className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile content - improved layout */}
        <div className="block md:hidden w-full">
          <div className="flex flex-col space-y-4">
            <div className="bg-[#F8F8F8] h-[24px] w-[120px] flex justify-center items-center font-medium text-[#141414] text-[10px] rounded-[6px]">
              <ul className="list-disc pl-4 text-center">
                <li>WHAT WE DO</li>
              </ul>
            </div>

            <div className="text-[#040444] w-full text-start text-[24px] leading-[32px] font-semibold">
              Shaping Future Architecture
            </div>

            <p className="text-[#191919] text-[14px] leading-[20px]">
              Elevate your spaces sustainably with Nilsson. Discover innovative modern designs for architecture,
              interior, and exterior.
            </p>

            <div className="flex items-center justify-start mt-4">
              <button className="bg-[#040444] text-[14px] w-[120px] h-[40px] text-white rounded-full whitespace-nowrap cursor-pointer hover:scale-104 transition-transform">
                Learn More
              </button>
              <a className="ml-2">
                <div className="w-[40px] h-[40px] bg-[#040444] rounded-full flex justify-center items-center hover:scale-104 transition-transform">
                  <Image src={RightArrow || "/placeholder.svg"} alt="right arrow" className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoAnimation;