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
      <Image
        src={companyLogo}
        alt="company logo"
        className="w-[120px] h-[70px] mb-15 mt-12"
      />
      <div className="flex flex-col items-start justify-center ml-1 w-[370px]">
        <div className="text-white font-bold text-[18px]">Stay in touch:</div>
        <p className="text-white text-[14px] mt-3 font-normal leading-6">
        Innovative Interiors Pvt Ltd, Plot No 7, VV Koil St,  <br />
        Chinmaya Nagar Stage 1, <br />
          Chennai-600092., <br />
         
        </p>


      

        <div className="text-white font-bold text-[18px] mt-7">Factory Address:</div>
        <p className="text-white text-[14px] mt-3 font-normal leading-6">
        S.No:50, Peruvoyal Village, Nainakuppam,   <br />
        Gummidipoondi (TK), Tiruvallur (Dt) - 601 206. <br />
         
         
        </p>
      

        <div className="flex flex-col items-start justify-center mt-8 space-y-3">
          <div className="text-white font-bold text-[18px]">Contact Us:</div>
          <div className="flex flex-col items-start justify-center space-y-1">
            <p className="text-white text-[14px] font-normal leading-6">
            Email: info@innovativeinteriors.in
            </p>
            <p className="text-white text-[14px] font-normal leading-6">
              Phone: 044-24795133
            </p>
          </div>

          <button className="bg-white text-[#030303] text-[13px] rounded-full w-[160px] h-[40px] mt-7">
            Explore More
          </button>

          <div className="flex flex-col items-start justify-center mt-4 space-y-6">
            <h1 className="text-white text-[16px] font-bold leading-[18px] mt-2">
              Stay Connected
            </h1>

            <div className="flex flex-row gap-7">
              <Image src={twitter} alt="twitter" />
              <Image src={facebook} alt="facebook" />
              <Image src={instagram} alt="instagram" />
              <Image src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-23 space-y-1">
         
          <p className="text-white text-[14px] font-bold leading-6">
          Designed & Developed by
          </p>
          <p className="text-white text-[14px] font-bold leading-6">
          © TIC Global
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
