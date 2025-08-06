"use client"

import { useState, useRef, useEffect } from "react"
import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AboutManagementPandian from "@/public/About/Directors/pandian.png"
import AboutManagementDevi from "@/public/About/Directors/devi.jpeg"
import AboutManagementNandaKris from "@/public/About/Directors/nandha.jpg"

interface TeamMember {
  id: number
  name: string
  title: string
  image: string | StaticImageData
  bio?: string
}

const managementTeam: TeamMember[] = [
  
  {
    id: 1,
    name: "Mr. Pandian Kailasam",
    title: "Managing Director",
    image: AboutManagementPandian,  
  bio:'Mr. Pandian is a dedicated entrepreneur who carries forward his family legacy with passion and hard work. Under his leadership, Innovative Interiors has grown into one of India’s leading turnkey execution firms, known for delivering high-quality results across sectors.'
  },
  {
    id: 2,
    name: "Mr. Nandakrishnan T",
    title: "CEO",
    image: AboutManagementNandaKris,
    bio:"Mr. Nandakrishnan brings over 30 years of experience in the interior contracting and furniture industry. He has led major projects across India, building expertise in business development, execution, procurement, and finance. His journey began in 2008 with a key corporate project alongside Mr. Pandian, setting the stage for their shared vision."
  },
  {
    id: 3,
    name: "Mrs. Devi Pandian",
    title: "Director – Administration, Finance & HR, Innovative Interiors",
    image: AboutManagementDevi,
    bio: "Mrs. Devi Pandian is a key pillar of Innovative Interiors, balancing personal and professional roles with dedication. As head of Administration, HR, and Finance, she ensures smooth operations, financial discipline, and a motivated team. Her sharp eye for detail, structured approach, and commitment to transparency have been vital in upholding the company's culture and long-term vision.",
  },
 
]

export default function ManagementTeam() {
  const [activeId, setActiveId] = useState<number>(1)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Get current active ID (either hovered or default)
  const currentActiveId = hoveredId !== null ? hoveredId : activeId

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // For mobile scroll controls
  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" })
    }
  }

  // Fix for iOS Safari - ensure proper scrolling behavior
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !isMobile) return

    // Force layout recalculation on iOS
    const handleResize = () => {
      container.style.display = "none"
      // Force reflow
      void container.offsetHeight
      container.style.display = "flex"
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  // Render mobile version
  if (isMobile) {
    return (
      <section className="py-8 px-4 w-full mx-auto ">
        <h2 className="text-3xl font-medium text-[#0A0A50] mb-6">Management</h2>

        <div className="relative w-full">
          {/* Mobile scroll controls */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md"
            aria-label="Previous member"
          >
            <ChevronLeft className="h-5 w-5 text-[#0A0A50]" />
          </button>
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md"
            aria-label="Next member"
          >
            <ChevronRight className="h-5 w-5 text-[#0A0A50]" />
          </button>

          {/* Container for cards */}
          <div
            ref={scrollContainerRef}
            className="w-full flex overflow-x-auto snap-x snap-mandatory pb-4 touch-pan-x"
            style={{
              WebkitOverflowScrolling: "touch", // For older iOS
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {managementTeam.map((member) => {
              const isActive = currentActiveId === member.id

              return (  
                <div
                  key={member.id}
                  className="relative overflow-hidden rounded-xl cursor-pointer min-w-[280px] h-[400px] snap-center mx-2 first:ml-0 last:mr-0"
                  onClick={() => setActiveId(member.id)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={member.image || "/placeholder.svg?height=500&width=300&query=person"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="280px"
                      priority
                    />
                  </div>

                  {/* Dark overlay */}
                  <div className={isActive ? "absolute inset-0 bg-black/30" : "absolute inset-0 bg-black/40"}></div>

                  {/* Content Container - Always at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {isActive && member.bio ? (
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">{member.name}</h3>
                        <p className="text-sm mt-2 leading-snug line-clamp-4">
                          {member.bio}
                          {/* <span className="text-blue-300 text-xs hover:underline ml-1 inline-block">view more</span> */}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-xs text-white/90">{member.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* iOS Safari scrollbar hiding */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>
    )
  }

  // Render desktop version (exactly as in the original code)
  return (
    <section className="py-16  md:px-8 w-full mx-auto grid grid-cols-[0.6fr_1fr] h-screen">
      <h2 className="md:text-[60px] text-[20px] font-medium text-[#0A0A50] mb-12">Management</h2>

      <div className="flex flex-col md:flex-row items-stretch gap-8 h-[500px] md:h-[95%] w-full">
        {managementTeam.map((member) => {
          const isActive = currentActiveId === member.id

          return (
            <motion.div
              key={member.id}
              className="relative overflow-hidden rounded-xl cursor-pointer h-full"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
              animate={{
                flex: isActive ? 2 : 0.7,
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              initial={false}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="33vw"
                  priority
                />
              </div>

              {/* Dark overlay */}
              {isActive ? (
                <div className="absolute inset-0 bg-black/30"></div>
              ) : (
                <div className="absolute inset-0 bg-black/40"></div>
              )}

              {/* Content Container - Always at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                {isActive && member.bio ? (
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    {/* <p className="text-sm text-white/90">{member.title}</p> */}
                    <p className="text-sm mt-2 leading-snug">
                      {member.bio} 
                      {/* <span className="text-blue-300 text-xs hover:underline mt-1">view more</span> */}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-xs text-white/90">{member.title}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
