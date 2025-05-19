"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import AboutManagementDevi from "@/public/AboutManagementDevi.png"
import AboutManagementNandaKris from "@/public/AboutManagementNandaKrish.png"
import AboutManagementPandian from "@/public/AboutManagementPandian.png"

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
    name: "Mr. Pandian Kallasamy",
    title: "Managing Director",
    image: AboutManagementPandian,
  },
  {
    id: 2,
    name: "Mrs. Devi Pandian",
    title: "Director – Administration, Finance & HR, Innovative Interiors",
    image: AboutManagementDevi,
    bio: "Mrs. Devi Pandian is a key pillar of Innovative Interiors, balancing personal and professional roles with dedication. As head of Administration, HR, and Finance, she ensures smooth operations, financial discipline, and a motivated team. Her sharp eye for detail, structured approach, and commitment to transparency have been vital in upholding the company's culture and long-term vision.",
  },
  {
    id: 3,
    name: "Mr. Nandakrishnan",
    title: "CEO",
    image: AboutManagementNandaKris,
  },
]

export default function ManagementTeam() {
  const [activeId, setActiveId] = useState<number>(2) 
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Get current active ID (either hovered or default)
  const currentActiveId = hoveredId !== null ? hoveredId : activeId

  return (
    <section className="py-16 px-4 md:px-8 w-full mx-auto grid grid-cols-[0.6fr_1fr] h-screen">
      <h2 className="text-6xl font-medium text-[#0A0A50] mb-12">Management</h2>

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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Dark overlay */}
              {
                isActive ? <div className="absolute inset-0 bg-black/30"></div> : <div className="absolute inset-0 bg-black/40"></div>
              }
              

              {/* Content Container - Always at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                {isActive && member.bio ? (
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    {/* <p className="text-sm text-white/90">{member.title}</p> */}
                    <p className="text-sm mt-2 leading-snug">{member.bio}  <span className="text-blue-300 text-xs hover:underline mt-1">view more</span></p>
                    
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
