import React from "react";

const Footer = () => {
    const pagesLink = [
        { link: "HOME" },
        { link: "SERVICES" },
        { link: "ABOUT" },
        { link: "CONTACT" }
    ];

    const cmsLink = [
        { link: "PROJECTS" },

        { link: "PROJECT SINGLE" },
        { link: "NEWS" },
        { link: "NEWS SINGLE" },
        { link: "SHOP" }
    ];

    const utility = [
        { link: "404 ERROR PAGE" },
        { link: "PASSWORD PAGE" },
        { link: "STYLE GUIDE" },
        { link: "LICENSING" },
        { link: "CHANGELOG" }
    ];

    return (
        <div className="bg-[#141414] h-[516px] flex flex-col justify-center">
            <div className="flex flex-row justify-around items-start px-20">
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
                    <div className="mt-2 mb-2">
                        LISBON <br />
                        <span className="text-[#888888]">
                            45 Coastal Boulevard,
                            <br />
                            Lisbon 1350-125, <br />
                            Portugal
                        </span>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 ">
                    <span className="text-[13px] text-[#888888] ">PAGES</span>
                    {pagesLink.map((item, index) => (
                        <a key={index} href={`#${item.link.replace(/\s+/g, '-').toLowerCase()}`} className="text-[13px] text-white   hover:scale-105">
                            {item.link}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col space-y-3">
                    <span className="text-[13px] text-[#888888]">CMS</span>
                    {cmsLink.map((item, index) => (
                        <a key={index} href={`#${item.link.replace(/\s+/g, '-').toLowerCase()}`} className="text-[13px] text-white hover:scale-105">
                            {item.link}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col space-y-3">
                    <span className="text-[13px] text-[#888888]">UTILITY</span>
                    {utility.map((item, index) => (
                        <a key={index} href={`#${item.link.replace(/\s+/g, '-').toLowerCase()}`} className="text-[13px] text-white hover:scale-105">
                            {item.link}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
