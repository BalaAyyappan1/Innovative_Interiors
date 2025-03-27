import React from "react";
import { PartnerImage1, PartnerImage2, RightArrow, venImage1, venImage2 } from "../ReusableComponenets/Icons";
import Image from "next/image";

const Partner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <span>EMPLOYEE SAYS</span>
            <span>
              Partner with us <br />
              Become a vendor
            </span>
            <span>Supplying Quality Materials for Exceptional Interiors.</span>

            <div className="flex-row flex">
              <button className="px-5 py-2 bg-[#040444] rounded-full whitespace-nowrap ">
                Let's Talk
              </button>
              <a className="">
                <div className="w-10 h-10 bg-[#040444] rounded-full flex justify-center items-center">
                  <Image
                    src={RightArrow}
                    alt="right arrow"
                    className="w-5 h-5"
                  />
                </div>
              </a>
            </div>

          </div>

          <div>
            <Image src={venImage1} alt={"alt"} />
          </div>



        </div>

<div className="flex flex-row ">
<Image src={venImage2} alt={"alt"} />
<p className="text-black">
Supplying Quality Materials for Exceptional Interiors.
Would you like me to add more details about vendor collaboration?
</p>
</div>

      </div>



      <section>
        <div>
            EMPLOYEE SAYS 
        </div>
        <div>
        Why Partner with Us?
        </div>

        <div className="flex flex-row">
            <div>
            <Image src={PartnerImage1} alt="alternative" className="w-1/2 h-auto" />

            </div>
            <div>
    <Image src={PartnerImage2} alt="alternative" className="w-1/2 h-auto" />
    
                </div>
</div>
      </section>
    </div>
  );
};

export default Partner;
