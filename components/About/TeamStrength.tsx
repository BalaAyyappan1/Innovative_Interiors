"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionLabel from "../ui/secionLabel"

const TeamStrength: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const teams = [
    {
      title: "Management & Commercial Team",
      count: 11,
    },
    {
      title: "Senior Project Manager",
      count: 25,
    },
    {
      title: "Project Engineers Including MEP",
      count: 53,
    },
    {
      title: "Project Coordinators",
      count: 20,
    },
    {
      title: "Quantity Surveyors",
      count: 13,
    },
    {
      title: "In-House Carpenters & Installation",
      count: 11,
    },
  ]

  return (
    <div className="w-full py-10 px-4 text-black text-center h-[80vh] flex flex-col items-center justify-center">

      <div className="flex flex-col gap-5 items-center justify-center">
        <SectionLabel text="Team Strength"/>
      <div className="flex justify-center items-center space-x-4 md:space-x-8 flex-wrap">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center hover:cursor-pointer md:w-[140px] md:h-[140px] 2xl:w-[199px] 2xl:h-[199px] rounded-full border border-gray-800 bg-white mb-4"
            style={{
              boxShadow: hoveredIndex === index ? "0px 6px 12px rgba(0, 0, 0, 0.15)" : "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
              borderColor: hoveredIndex === index ? "#1F2937" : "#1F2937",
              transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className="text-center font-bold px-3 md:text-xs 2xl:text-base text-[#040444]">{team.title}</p>
            <p className="text-xl font-bold ">{team.count}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default TeamStrength
