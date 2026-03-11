import React from "react";

const Page7 = ({img,h2,h3,p}) => {
  return (
    <div className="bg-white rounded-[12px] shadow-md w-full lg:w-[350px] ">
      <div className="flex flex-col items-center p-[30px] text-center">
        <img className="w-[60px] mb-[15px]" src={img} alt="" />
        <h2 className="text-[18px] lg:text-[20px] font-semibold">
          {h2}
        </h2>
      </div>
      <div className="border-t p-[20px] text-[14px] text-gray-600">
        <h3 className="font-bold mb-[10px]">{h3}</h3>
        <p>1. Анализ конкурентов</p>
        <p>2. Анализ инвесторов</p>
        <p>3. Размеры рынка (TAM,SAM,SOM)</p>
        <p>4. Анализ СМИ</p>
        <p>5. Анализ запросов в интернет</p>
      </div>
      <div className="border-t p-[20px] flex justify-between">
        <span>Готовность</span>
        <span>7 раб. дней</span>
      </div>
      <div className="border-t p-[20px] flex justify-between">
        <span>Язык</span>
        <span>рус. / англ.</span>
      </div>
      <div className="border-t p-[20px] flex justify-between font-bold">
        <span>Стоимость</span>
        <span className="text-[#2D8BC0]">{p}</span>
      </div>
      <div className="p-[20px]">
        <button className="w-full bg-gradient-to-r from-[#5EA8D1] to-[#1E7FB4] text-white py-[12px] rounded-[8px]">
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default Page7;