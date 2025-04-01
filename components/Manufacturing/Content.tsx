import React from "react";

const Content = () => {
  return (
    <div className="mb-80">
      <div className="flex flex-row space-x-90 px-5  justify-between">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px] whitespace-nowrap">
          <ul className="list-disc pl-5 text-center whitespace-nowrap">
            <li>EMPLOYEE SAYS</li>
          </ul>
        </div>
      

      <div className="flex flex-col">
        <div>
          <p className="font-semibold text-[55.91px] leading-[69px] text-[#040444]">
            Innovative Interiors: Where Design Meets Manufacturing Excellence
          </p>
        </div>
        <div>   
          <p className="font-normal text-[25px] leading-[42px] text-[#393535]">
            Manufacturing is a fine balance of engineering, craftsmanship, and
            advanced technology. Our facilities boast:
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
