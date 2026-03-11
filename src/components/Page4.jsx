import React from "react";
import fatim from "../image/Fatim.svg";
import zz from "../image/zz.svg";
const Page4 = () => {
  return (
    <div className="bg-[#F5F7F9] py-[60px] px-[20px] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h1 className="text-[#1178B2] text-[22px] md:text-[26px] lg:text-[30px] font-semibold mb-[30px]">
          С какими рынками мы работаем?
        </h1>
        <div className="flex flex-col md:flex-row gap-[10px] mb-[40px]">
          <button className="bg-[#7FB3CE] lg:w-[254px] text-white px-[25px] py-[12px] rounded-[6px]">  Ближний восток</button>
          <button className="bg-[#E5E7EB] lg:not-first:w-[254px] px-[25px] py-[12px] rounded-[6px]"> Азия</button>
          <button className="bg-[#E5E7EB] lg:w-[254px] px-[25px] py-[12px] rounded-[6px]">Латинская Америка</button>
          <button className="bg-[#E5E7EB] lg:w-[264px]  px-[25px] py-[12px] rounded-[6px]">Африка</button>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px] items-start">

          <div className="lg:w-[420px]">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-[10px]">ЧЕМ ИНТЕРЕСЕН</h2>
            <h2 className="text-[#07AF91] text-[20px] md:text-[24px] font-bold mb-[15px]">РЫНОК MENA:</h2>

            <p className="text-[14px] md:text-[16px] text-[#6B7280] mb-[20px]">
              ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар,
              Тунис, Йемен, Египет, Алжир
            </p>

            <button className="bg-[#2D8BC0] text-white px-[25px] py-[12px] rounded-[6px]">Выйти на рынок</button>

            <div className="flex items-center gap-[10px] mt-[20px]">
             <img className="w-[40px] h-[40px] rounded-[50%]" src={fatim} alt="" />
              <div>
                <p className="text-[14px] font-bold">Фатима</p>
                <p className="text-[12px] text-gray-500">Менеджер по MENA</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full lg:w-[600px]">

            <div className="bg-white p-[30px] rounded-[12px] shadow">
              <h1 className="text-[#7FB3CE] text-[28px] font-bold">>5,5</h1>
              <p className="text-gray-500 text-[14px]">Инвестиций pre-seed, seed</p>
            </div>
            <div className="bg-white p-[30px] rounded-[12px] shadow">
              <h1 className="text-[#7FB3CE] text-[28px] font-bold">>300</h1>
              <p className="text-gray-500 text-[14px]">Акселераторов, инкубаторов</p>
            </div>
            <div className="bg-white p-[30px] rounded-[12px] shadow">
              <h1 className="text-[#7FB3CE] text-[28px] font-bold">73</h1>
              <p className="text-gray-500 text-[14px]"> Венчурных фонда </p>
            </div>
            <div className="bg-[#1C7DB6] text-white p-[30px] rounded-[12px] flex flex-col justify-center items-center">
             <img src={zz} alt="" />
              <p className="text-[16px] text-center mt-[15px]">
                Скачать отчет <br /> по рынку MENA
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page4;