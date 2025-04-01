import React from "react";
import Image from "next/image";
import companyLogo from "@/public/CompanyLogo.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/fbook.svg";
import instagram from "@/public/Instagram.svg";
import linkedin from "@/public/git.svg";

const MobileFooter = () => {
  return (
    <div className="flex flex-col items-start px-4 justify-start  bg-[#141414] h-[876px]">
      <Image src={companyLogo} alt="company logo" className="w-[89px] h-[45px] mb-15 mt-12" />
      <div className="flex flex-col items-start justify-center ml-1 w-[370px]">
        <div className="text-white font-bold text-[18px]">Stay in touch:</div>
        <p className="text-white text-[14px] mt-3 font-normal leading-6">
          2nd Floor, Tower "C", <br />Unitech Business Zone, <br />Nirvana Country, South
          City - 2, <br />Sector-50, Gurugram - 122018, Haryana
        </p>

        <p className="text-white text-[14px] mt-5 font-normal leading-6 ">Email: info@[YourCompanyName].com</p>

        <p className="text-white text-[14px] mt-3 font-normal leading-6 ">Phone: +91 XXXXX XXXXX</p>

        <div className="flex flex-col items-start justify-center mt-8 space-y-3">
          <div className="text-white font-bold text-[18px]">Contact Us:</div>
          <div className="flex flex-col items-start justify-center space-y-1">
            <p className="text-white text-[14px] font-normal leading-6">Email: info@[YourCompanyName].com</p>
            <p className="text-white text-[14px] font-normal leading-6">Phone: +91 XXXXX XXXXX</p>
          </div>


          <button className="bg-white text-[#030303] text-[13px] rounded-full w-[160px] h-[40px] mt-7">Explore More</button>

<div className="flex flex-col items-start justify-center mt-4 space-y-6">
<h1 className="text-white text-[16px] font-bold leading-[18px] mt-2">Stay Connected</h1>

<div className="flex flex-row gap-7">
  <Image src={twitter} alt="twitter" />
  <Image src={facebook} alt="facebook" />
  <Image src={instagram} alt="instagram" />
  <Image src={linkedin} alt="linkedin" />
</div>
</div>

       
        </div>

        <div className="flex flex-col items-start justify-center mt-23 space-y-6">
          <p className="text-white text-[14px] font-bold leading-6">Privacy Policy</p>
          <p className="text-white text-[14px] font-bold leading-6">© [Year] [Company Name]. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
