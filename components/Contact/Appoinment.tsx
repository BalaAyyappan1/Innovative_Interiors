"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Clock, ChevronDown, Send, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import SectionLabel from "../ui/secionLabel"
import ArrowBtn from "../ui/arrowBtn"

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    type: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  // Track which input is currently focused
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, type } = e.target
    setFocusedInput(id)

    // Change input type for date and time fields
    if (id === "date") {
      e.target.type = "date"
    } else if (id === "time") {
      e.target.type = "time"
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFocusedInput(null)

    // Reset input type if empty
    if ((id === "date" || id === "time") && !value) {
      e.target.type = "text"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      <div className=" mb-10 md:mb-16">
        <h1 className="text-[#131313] text-3xl md:text-[55px]  lg:text-7xl xl:text-[80px] font-medium text-center">
          Let’s Build Something Exceptional
        </h1>
        <p className="text-[#131313] text-center md:text-xl my-2"> We’re just a message away — reach out to start a conversation, request a quote, or schedule a meeting</p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit} className="w-full space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all"
                  placeholder="Name*"
                  required
                />
              </div>

              <div className="relative">
                <input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all"
                  placeholder="Mobile Number*"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all"
                  placeholder="Email ID*"
                  required
                />
              </div>

              <div className="relative">
                <select
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("type")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all appearance-none"
                  required
                >
                  <option value="" disabled>
                    I am a*
                  </option>
                  <option value="homeowner">Homeowner</option>
                  <option value="business">Business Owner</option>
                  <option value="designer">Interior Designer</option>
                  <option value="architect">Architect</option>
                  <option value="contractor">Contractor</option>
                </select>
                <ChevronDown
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${focusedInput === "type" ? "text-[#040444]" : "text-gray-400"
                    } pointer-events-none w-5 h-5 transition-colors`}
                />
              </div>
            </div>

            <div className="relative">
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocusedInput("service")}
                onBlur={() => setFocusedInput(null)}
                className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all appearance-none"
                required
              >
                <option value="" disabled>
                  Interested in*
                </option>
                <option value="residential">Residential Interior Design</option>
                <option value="commercial">Commercial Interior Design</option>
                <option value="renovation">Renovation</option>
                <option value="furniture">Custom Furniture</option>
                <option value="consultation">Design Consultation</option>
              </select>
              <ChevronDown
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${focusedInput === "service" ? "text-[#040444]" : "text-gray-400"
                  } pointer-events-none w-5 h-5 transition-colors`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="relative">
                <input
                  id="date"
                  type="text"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all"
                  placeholder="Preferred Date*"
                  required
                />
                <Calendar
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${focusedInput === "date" ? "text-[#040444]" : "text-gray-400"
                    } pointer-events-none w-5 h-5 transition-colors`}
                />
              </div>

              <div className="relative">
                <input
                  id="time"
                  type="text"
                  value={formData.time}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full h-12 md:h-16 rounded-lg px-4 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all"
                  placeholder="Preferred Time*"
                  required
                />
                <Clock
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${focusedInput === "time" ? "text-[#040444]" : "text-gray-400"
                    } pointer-events-none w-5 h-5 transition-colors`}
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                rows={6}
                className="w-full rounded-lg px-4 py-3 bg-[#F7F8FA] text-sm md:text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#040444]/20 transition-all resize-none"
                placeholder="Write a Message"
              ></textarea>
            </div>

            <div className="flex flex-col items-center justify-center text-black gap-2">
              <ArrowBtn text="Submit" backgroundColor="#040444" />
              <p>We’ll get in touch within 24 hours.</p>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full lg:w-2/5 bg-[#040444] rounded-2xl p-6 md:p-8 lg:p-10 text-white">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-3">Address</h2>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                Plot No.7, V. V. Koil Street,Chinmaya Nagar,
                <br />
                Chennai - 600 092
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-3">Contact</h2>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">Phone: 044-24795133</p>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">Email: info@innovativeinteriors.in</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-3">Factory Address</h2>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                S.No: 50, Peruvoyal Village,Nainakuppam,
                <br />
                Gummidipoondi (TK),
                <br />
                Thiruvallur (DT) - 601206.
                <br />
                Tamilnadu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Stay connected</h2>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
