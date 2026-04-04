import React from "react";
import logo from "../images/logo.svg";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
import img4 from "../images/img4.svg";
import img6 from "../images/img6.svg";

const Footer = () => {
  return (
    <footer className="pt-[40px] pb-[20px] w-full">
      <div className="w-full">
        <div className="bg-[#0b0b12]  rounded-[28px] p-[40px] md:p-[35px] w-[90%] m-auto lg:px-[20px] flex flex-col md:flex-row justify-between items-center gap-[30px] shadow-lg">
          <div className="w-fullmd:max-w-[420px]">
            <h1 className="text-white text-[28px] md:text-[36px] font-bold leading-[100%]">
              Create and Sell NFTs
            </h1>

            <p className="text-[#a1a1aa] text-[14px] md:text-[16px] mt-[15px]">
              World’s Largest NFT Place
            </p>

            <div className="flex flex-col sm:flex-row gap-[15px] mt-[30px]">
              <button className="bg-white text-black font-bold rounded-[12px] px-[25px] py-[14px]">
                Explore More
              </button>

              <button className="border border-white text-white font-bold rounded-[12px] px-[25px] py-[14px]">
                Sell Artwork
              </button>
            </div>
          </div>

          <div className="w-full md:w-[320px] lg:w-[360px]">
            <div className="rounded-[18px] overflow-hidden">
              <img
                src={img6}
                alt=""
                className="w-full h-[220px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#0b0b12] text-white mt-[30px] py-[60px] md:px-[45px] lg:px-[40px]">
          <div className="flex flex-col gap-[25px] md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-[10px]">
              <img src={logo} alt="" />
            </div>

            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] text-[14px] text-gray-400">
              <p>Privacy Policy</p>
              <p>Term & Conditions</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="mt-[25px] border-t border-gray-700 pt-[20px] flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center text-sm text-gray-500">

            <h1>© 2023 EATLY All Rights Reserved.</h1>

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