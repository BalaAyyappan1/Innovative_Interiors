"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ArrowBtn from "../ui/arrowBtn"
import SectionLabel from "../ui/secionLabel"

const VideoAnimation = () => {
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const videoScrubberRef = useRef<ScrollTrigger | null>(null)

  // State
  const [isMobile, setIsMobile] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  // Browser detection - run only once on mount
  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check if we're on Safari
    const checkSafari = () => {
      if (typeof window === "undefined") return false
      const ua = navigator.userAgent.toLowerCase()
      return ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1
    }

    // Initial checks
    checkMobile()
    setIsSafari(checkSafari())

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        checkMobile()
        if (scrollTriggerRef.current) {
          ScrollTrigger.refresh(true)
        }
      }, 100)
    }

    // Listen for resize events
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  // Video preloading and optimization
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force better performance with these settings
    video.muted = true
    video.playsInline = true
    video.preload = "auto"
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    video.setAttribute("x-webkit-airplay", "allow")

    // Safari-specific optimizations
    if (isSafari) {
      video.controls = false
      video.autoplay = false
    }

    // Reset video position
    video.currentTime = 0

    // Performance optimizations
    video.style.transform = "translate3d(0, 0, 0)"
    video.style.webkitTransform = "translate3d(0, 0, 0)"
    video.style.backfaceVisibility = "hidden"
    video.style.webkitBackfaceVisibility = "hidden"
    video.style.willChange = "transform"

    // Preload video
    const preloadVideo = async () => {
      try {
        // For Safari, we need special handling
        if (isSafari) {
          // Try to play and immediately pause to force load
          try {
            await video.play()
            video.pause()
            video.currentTime = 0
          } catch (e) {
            console.log("Safari video preload: play attempt failed")
          }

          // Set a timeout to ensure we move forward even if play fails
          setTimeout(() => {
            setVideoLoaded(true)
          }, 500)
        } else {
          // For other browsers, wait for canplaythrough event
          if (video.readyState >= 3) {
            setVideoLoaded(true)
          } else {
            video.addEventListener(
              "canplaythrough",
              () => {
                setVideoLoaded(true)
              },
              { once: true },
            )
          }
        }

        // Force load
        video.load()
      } catch (error) {
        console.error("Video preload error:", error)
        // Fallback - mark as loaded anyway after timeout
        setTimeout(() => {
          setVideoLoaded(true)
        }, 1000)
      }
    }

    preloadVideo()

    // Cleanup
    return () => {
      video.removeAttribute("src")
      video.load()
    }
  }, [isSafari])

  // ScrollTrigger setup - only after video is loaded
  useEffect(() => {
    if (!videoLoaded) return

    const video = videoRef.current
    const videoSection = sectionRef.current

    if (!video || !videoSection) return

    // Reset video to beginning
    try {
      video.currentTime = 0
    } catch (e) {
      console.error("Video time reset error:", e)
    }

    // Clear any existing ScrollTriggers to prevent conflicts
    if (videoScrubberRef.current) {
      videoScrubberRef.current.kill()
      videoScrubberRef.current = null
    }

    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill()
      scrollTriggerRef.current = null
    }

    // Adjust settings based on device
    const scrubValue = isMobile ? 0.5 : 0.1
    const endValue = isMobile ? "+=300%" : "+=250%"

    // Create the main scroll trigger for the video
    videoScrubberRef.current = ScrollTrigger.create({
      trigger: videoSection,
      start: "top top",
      end: endValue,
      pin: true,
      pinSpacing: true,
      scrub: scrubValue,
      anticipatePin: 1,
      onUpdate: (self) => {
        if (!video) return

        // Only update if we're in view to save resources
        if (!isInView) {
          setIsInView(true)
        }

        // Calculate video time based on scroll progress
        const progress = Math.max(0, Math.min(self.progress, 1))
        const targetTime = progress * video.duration

        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          try {
            // Only update if the change is significant enough
            if (Math.abs(video.currentTime - targetTime) > 0.01) {
              video.currentTime = targetTime
            }
          } catch (e) {
            console.error("Video time update error:", e)
          }
        })
      },
      onEnter: () => {
        setIsInView(true)
        if (video) {
          try {
            video.currentTime = 0
          } catch (e) {
            console.error("Video time reset error:", e)
          }
        }
      },
      onLeave: () => {
        if (video) {
          try {
            video.currentTime = video.duration
          } catch (e) {
            console.error("Video time set error:", e)
          }
        }
        // Small delay before marking as not in view to ensure smooth transition
        setTimeout(() => {
          setIsInView(false)
        }, 300)
      },
      onEnterBack: () => {
        setIsInView(true)
      },
      onLeaveBack: () => {
        if (video) {
          try {
            video.currentTime = 0
          } catch (e) {
            console.error("Video time reset error:", e)
          }
        }
        // Small delay before marking as not in view to ensure smooth transition
        setTimeout(() => {
          setIsInView(false)
        }, 300)
      },
    })

    // Create a second ScrollTrigger to handle the transition to the next section
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: videoSection,
      start: "bottom top",
      onEnter: () => {
        if (video) {
          try {
            video.currentTime = video.duration
          } catch (e) {
            console.error("Video time set error:", e)
          }
        }
        setIsInView(false)
      },
      onLeaveBack: () => {
        setIsInView(true)
      },
    })

    // Cleanup on component unmount
    return () => {
      if (videoScrubberRef.current) {
        videoScrubberRef.current.kill()
        videoScrubberRef.current = null
      }

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
        scrollTriggerRef.current = null
      }

      setIsInView(false)
    }
  }, [videoLoaded, isMobile, isSafari])

  // Additional cleanup on unmount
  useEffect(() => {
    return () => {
      // Kill all ScrollTrigger instances to be extra safe
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Remove any classes we might have added to the body
      document.body.classList.remove("video-completed")

      // Force garbage collection of video element
      if (videoRef.current) {
        videoRef.current.removeAttribute("src")
        videoRef.current.load()
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="video-section w-full md:h-screen flex flex-col md:flex-row md:space-y-0 space-y-5 justify-between items-center"
    >
      <div className="w-full md:w-[60%] h-full flex justify-center items-center relative">
        {/* Loading indicator */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg z-10">
            <div className="text-white">Loading video...</div>
          </div>
        )}

        {/* Video element - only render source when needed */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-[500px] object-cover rounded-lg"
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            visibility: isInView || !videoLoaded ? "visible" : "hidden",
          }}
        >
          {/* Only include source if we're in view or loading */}
          {(isInView || !videoLoaded) && <source src="/6 0001-0150.mp4" type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        ref={contentRef}
        className="w-full md:w-[40%] md:mt-0 mt-5 mb-[100px] flex flex-col space-x-5 justify-center items-center md:items-start space-y-5 md:space-y-10 px-10"
      >
        {/* Desktop content */}
        <div className="hidden md:block w-full">
          <SectionLabel text="WHAT WE DO" />
          <div className="flex flex-col gap-2">
            <div className="text-[#040444] w-full md:justify-start md:text-start text-center justify-center items-center text-[38px] leading-[55.1px]">
            Turning Vision Into Reality
            </div>
            <div>
              <p className="text-[#141414] text-[20px] text-center md:text-start leading-[35px]">
              Over 1 million sft of Interior Furniture manufactured
              </p>
            </div>

            <ArrowBtn />
          </div>
        </div>

        {/* Mobile content */}
        <div className="block md:hidden w-full">
          <div className="flex flex-col space-y-4 md:text-start text-center md:items-start items-center">
            <div className="bg-[#F8F8F8] h-[24px] w-[120px] flex justify-center items-center font-medium text-[#141414] text-[10px] rounded-[6px]">
              <ul className="list-disc pl-4 text-center">
                <li>WHAT WE DO</li>
              </ul>
            </div>

            <div className="text-[#040444] w-full md:text-start text-center text-[24px] leading-[32px] font-semibold">
              Shaping Future Architecture
            </div>

            <p className="text-[#191919] text-[14px] leading-[20px]">
              Elevate your spaces sustainably with Nilsson. Discover innovative modern designs for architecture,
              interior, and exterior.
            </p>

            <ArrowBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoAnimation
