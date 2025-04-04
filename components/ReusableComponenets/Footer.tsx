import React from "react";
  
import companyLogo from "@/public/CompanyLogo.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/fbook.svg";
import instagram from "@/public/Instagram.svg";
import linkedin from "@/public/git.svg";


import Image from "next/image";
const Footer = () => {
    const pagesLink = [
        { link: "HOME",
            href: "/"
         },
        { link: "ABOUT",
            href: "/about"
         },
        { link: "MANUFACTURING",
            href: "/manufacturing"
         },
        { link: "SERVICE",
            href: "/service"
         },
        { link: "PROJECTS",
            href: "/projects"
         },
        { link: "CAREERS",
            href: "/careers"
         },
        {link:"VENDORS",
            href: "/vendors"
         },
        { link: "CONTACTS",
            href: "/contacts"
         }
    ];



    return (
        <div className="bg-[#141414] h-[516px] flex flex-col justify-center">

            <div className="flex flex-row justify-around items-start px-5 ">
            <Image src={companyLogo} alt="company logo" className="w-[150px]  mt-1" />


            <div className="flex flex-col space-y-3 ">
                    <span className="text-[13px] text-[#888888] ">PAGES</span>
                    {pagesLink.map((item, index) => (
                        <a key={index} href={item.href} className="text-[13px] text-white hover:scale-105">
                            {item.link}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col ">
                    <span className="text-[13px] text-[#888888]">OFFICES</span>
                    <div className="mt-3">
                        PRAGUE <br />
                        <span className="text-[#888888] text-[14.88px] ">
                            23 Greenfield Avenue,
                            <br />
                            Prague 120 00,
                            <br />
                            Czech Republic
                        </span>
                    </div>
                    <div className="mt-4 mb-2">
                        LISBON <br />
                        <span className="text-[#888888]">
                            45 Coastal Boulevard,
                            <br />
                            Lisbon 1350-125, <br />
                            Portugal
                        </span>
                    </div>
                </div>

              

              

                <div className="flex flex-col ">
                    <span className="text-[13px] text-[#888888]">CONTACT US</span>
                    <div className="mt-3">
                        
                        <span className="text-[#FFFFFF] text-[14.88px] ">
                        EMAIL : INFOINNOVATIVEINTERIORS.IN <br />
                        Phone : 044-24795133
                        </span>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-4 space-y-6">
            <h1 className="text-[#888888] text-[16px] font-bold leading-[18px] mt-2">
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
            </div>
        </div>
    );
};

export default Footer;
