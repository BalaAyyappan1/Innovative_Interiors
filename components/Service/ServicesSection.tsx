import Image from "next/image"

const ServicesSection = () => {
  return (
    <div className="w-full md:h-screen md:mt-36 mt-20   mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="w-full lg:w-[45%] lg:px-8 py-8">
          <div className="space-y-12">
            {/* Service 1 */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">
              Comprehensive Turnkey Contracting
              </h2>
              <p className="text-gray-700 text-[14px] md:text-base leading-relaxed">
                From flooring to ceiling and everything in between, we handle every aspect of your interior project with
                structured coordination and technical excellence.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div>

            {/* Service 2 */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">Civil Construction</h2>
              <p className="text-gray-700 text-[14px] md:text-base  leading-relaxed">
                From foundational works to structural modifications, our civil team ensures robust construction aligned
                with project needs — enabling seamless integration with interior execution.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div>

            {/* Service 3 */}
            {/* <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">
                Execution of Architect-Designed Projects
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When leading architects need flawless execution, they rely on us. We bring their designs to life with
                precision, speed, and uncompromised quality.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div> */}

            {/* Service 4 */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">
                Supply & Execution of Superior Quality Woodwork
              </h2>
              <p className="text-gray-700 text-[14px] md:text-base  leading-relaxed">
                Supported by our in-house manufacturing unit, we deliver high-grade woodwork that meets the highest
                benchmarks in finish and detailing.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div>
          </div>
        </div>

        {/* Center Divider with Image - Only visible on desktop */}
        <div className="hidden lg:block relative w-[10%] flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full bg-[#E5EAEB] rounded-4xl flex items-end justify-center">
              <Image
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Furniture detail"
                width={180}
                height={400}
                className="object-cover rounded-4xl  h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[45%] lg:px-8 py-8">
          <div className="space-y-12">
            {/* Service 5 */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">Design-Build Solutions</h2>
              <p className="text-gray-700 text-[14px] md:text-base  leading-relaxed">
                A streamlined approach where we handle both design and execution under one roof — ensuring faster
                delivery, cost efficiency, and design integrity.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div>

            {/* Service 6 */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">
                Custom Furniture Manufacturer & Supplier
              </h2>
              <p className="text-gray-700 text-[14px] md:text-base  leading-relaxed">
                We craft and supply bespoke furniture tailored to the uniqueness of each space — blending luxury
                aesthetics with durable function.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div>

            {/* Service 7 */}
            {/* <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">Procurement & Supply Chain Management</h2>
              <p className="text-gray-700 leading-relaxed">
                Leveraging a strong network and internal systems, we offer efficient sourcing solutions that ensure
                timely access to premium materials and hardware.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div> */}

            {/* Service 8 */}
            {/* <div className="space-y-3">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A0A50]">After-Sales Support & Service</h2>
              <p className="text-gray-700 leading-relaxed">
                Our commitment doesn't end at handover — we continue to offer maintenance and support to protect the
                longevity of your interiors.
              </p>
              <div className="w-full h-px bg-gray-500 mt-6"></div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile divider with image - Only visible on mobile */}
      <div className="lg:hidden w-full h-[200px] rounded-xl bg-[#E5EAEB] my-8 flex items-end justify-center">
        <Image src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Furniture detail" width={180} height={180} className="object-cover h-full w-full rounded-xl" />
      </div>
    </div>
  )
};

export default ServicesSection;