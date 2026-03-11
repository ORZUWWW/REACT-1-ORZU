import React from "react";

const Page61 = ({ name, about }) => {
  return (
    <div className="w-full flex justify-center px-[20px] my-[15px]">
      <div className="w-full max-w-[1100px] bg-white rounded-[10px] shadow-sm">
        <div className="flex items-center justify-between p-[18px] md:p-[22px]">
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            <span className="text-[#1178B2] font-bold text-[15px] md:text-[17px]">{name}</span>
            <span className="text-[14px] md:text-[16px] text-gray-700">{about}</span>
          </div>
          <div className="bg-[#2D8BC0] w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex items-center justify-center rounded-full text-white">↓</div>
        </div>
      </div>
    </div>
  );
};

export default Page61;