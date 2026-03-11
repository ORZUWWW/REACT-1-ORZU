import React from "react";

const Page6 = ({children}) => {
  return (
    <div className="bg-[#F5F7F9] py-[60px]">
    <div className=" px-[20px] flex justify-center">
      <div className="max-w-[1100px] w-full">
        <h1 className="text-[#1178B2] text-[24px] md:text-[28px] lg:text-[32px] font-bold mb-[30px]"> Программа акселератора</h1>
        <div className="bg-white rounded-[12px] shadow overflow-hidden">
          <div className="flex justify-between items-center p-[20px] border-b">
            <div className="flex flex-col md:flex-row md:gap-[10px]">
              <span className="text-[#1178B2] font-bold">Модуль 1</span>
              <span className="text-[14px] md:text-[16px] text-gray-700">Тенденции и тренды современного мира</span>
            </div>
            <div className="bg-[#2D8BC0] w-[35px] h-[35px] flex items-center justify-center rounded-[50%] text-white">↑</div>
          </div>
          <div className="p-[18px] border-b text-[13px] md:text-[15px] text-gray-600">Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</div>
          <div className="p-[18px] border-b text-[13px] md:text-[15px] text-gray-600">Тема 2. Рынки Ближнего Востока, Азии, Латинской Америки</div>
          <div className="p-[18px] border-b text-[13px] md:text-[15px] text-gray-600">3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?</div>
          <div className="p-[18px] text-[#2D8BC0] text-[14px] md:text-[16px]">9 видео роликов, вебинар с приглашенным экспертом</div>
        </div>
      </div>
    </div>

    {children}
    </div>
  );
};

export default Page6;