import React from "react";
import i18n from "../i18";

const logo = "/images/logo.svg";
const img1 = "/images/img1.svg";
const img2 = "/images/img2.svg";
const img3 = "/images/img3.svg";
const img4 = "/images/img4.svg";
const img6 = "/images/img6.svg";

const Footer = () => {
  return (
    <footer className="pt-[40px] pb-[20px] w-full">
      <div className="w-full">
        <div className="bg-[#0b0b12] rounded-[28px] p-[40px] md:p-[35px] w-[90%] m-auto lg:px-[20px] flex flex-col md:flex-row justify-between items-center gap-[30px] shadow-lg">
          <div className="w-full md:max-w-[420px]">
            <h1 className="text-white text-[28px] md:text-[36px] font-bold leading-[100%]">
              {i18n.t("createAndSell")}
            </h1>

            <p className="text-[#a1a1aa] text-[14px] md:text-[16px] mt-[15px]">
              {i18n.t("worldLargest")}
            </p>

            <div className="flex flex-col sm:flex-row gap-[15px] mt-[30px]">
              <button className="bg-white text-black font-bold rounded-[12px] px-[25px] py-[14px]">
                {i18n.t("exploreMore")}
              </button>

              <button className="border border-white text-white font-bold rounded-[12px] px-[25px] py-[14px]">
                {i18n.t("sellArtwork")}
              </button>
            </div>
          </div>

          <div className="w-full md:w-[320px] lg:w-[360px]">
            <div className="rounded-[18px] overflow-hidden">
              <img src={img6} alt="" className="w-full h-[220px]" />
            </div>
          </div>
        </div>

        <div className="bg-[#0b0b12] text-white mt-[30px] py-[60px] md:px-[45px] lg:px-[40px]">
          <div className="flex flex-col gap-[25px] md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-[10px]">
              <img src={logo} alt="" />
            </div>

            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] text-[14px] text-gray-400">
              <p>{i18n.t("privacyPolicy")}</p>
              <p>{i18n.t("termsConditions")}</p>
              <p>{i18n.t("aboutUs")}</p>
              <p>{i18n.t("contact")}</p>
            </div>
          </div>

          <div className="mt-[25px] border-t border-gray-700 pt-[20px] flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center text-sm text-gray-500">
            <h1>{i18n.t("rights")}</h1>

            <div className="flex gap-[25px] items-center">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;