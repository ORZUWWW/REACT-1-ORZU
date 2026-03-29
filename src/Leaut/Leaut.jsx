import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../image/logo.svg"; // MANIFOLD logo
import twitter from "../image/twitter.svg";
import linkedin from "../image/linkedin.svg";
import facebook from "../image/facebook.svg";
import pal from "../image/pal.svg"
import main from "../image/mainlogo.svg"



const Layout = () => {
  let inpref=useRef()
  function inpfocus() {
    inpref.current.focus()
  }
  return (
    <div>
    <div className="w-full">
  
      <nav className="w-full h-[70px] flex items-center justify-between px-[40px] border-b border-gray-200 bg-white">

        <div className="text-[26px] font-bold tracking-[6px] text-black">
          <img src={main} alt="" />
        </div>

  
        <div className="lg:flex items-center gap-[35px] text-[14px] hidden text-gray-600 font-medium">
          <Link to={"/"} className="hover:text-black transition">
            Home
          </Link>

          <Link to={"/Info"} className="hover:text-black transition">
            Info
          </Link>

          <Link to={"/Table"} className="hover:text-black transition">
            Table
          </Link>

          <button
            onClick={() => inpfocus()}
            className="bg-red-500 text-white px-[18px] py-[8px] rounded-md text-[12px] font-semibold hover:bg-red-600 transition"
          >
            CONTACT US
          </button>
        </div>
        <img className="lg:hidden block" src={pal} alt="" />

      </nav>

    
      <Outlet />
    </div>


 <div className="w-full bg-[#1b1b1b] pt-[80px]">

      <div className="w-full flex justify-center px-[20px]">
        <div className="w-full max-w-[1200px] bg-[#222222] rounded-[20px] shadow-2xl p-[30px] lg:p-[50px] flex flex-col lg:flex-row gap-[40px]">

 
          <div className="flex flex-col gap-[10px] w-full lg:w-[40%]">
            <h1 className="text-[45px] sm:text-[55px] font-bold text-white leading-[1.1]">
              SUBSCRIBE <br />
              TO <span className="text-red-500">L.U.Y.E</span>
            </h1>

            <p className="text-red-500 text-[14px]">
              Level Up Your Email Newsletter
            </p>
          </div>

     
          <div className="w-full lg:w-[60%] flex flex-col gap-[15px] text-[#d7d7d7] text-[14px]">
            <p>
              Our aim is to level up your email marketing to world-class standards.
              We want to bring joy to your readers and deliver excellent ROI for your business.
              That's why we created our email newsletter.
            </p>

            <p>
              But here is the thing: it's not just about us promoting our agency services
              (we promise). In our emails, we share valuable advice and practical tips based
              on our own experiences. Our goal is to help you enhance your email marketing
              without breaking the bank.</p>

            <p className="text-red-500">
              Let’s join forces and make your emails shine!
            </p>

            <h2 className="text-white text-[18px] font-bold mt-[10px]">
              SUBSCRIBE TO L.U.Y.E.
            </h2>

   
            <div className="flex w-full h-[45px] bg-white rounded-md overflow-hidden mt-[5px]">
              <input
                type="text"
                placeholder="Your Email"
                ref={inpref}
                className="w-full px-[15px] outline-none text-black text-[14px]"
              />
              <button className="bg-red-500 px-[25px] text-white text-[13px] font-semibold">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-[12px] text-gray-400">
              Согласие на получение писем?
            </p>
          </div>

        </div>
      </div>

   
      <div className="w-full border-t border-[#333] mt-[70px] py-[25px] px-[20px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-[25px] items-center">

         
          <img src={logo} alt="" className="w-[160px] opacity-80" />

          
          <div className="flex flex-wrap justify-center gap-[30px] text-gray-400 text-[13px]">
            <p className="hover:text-white cursor-pointer">Services</p>
            <p className="hover:text-white cursor-pointer">About Us</p>
            <p className="hover:text-white cursor-pointer">Email Marketing Audit</p>
            <p className="hover:text-white cursor-pointer">Portfolio</p>
            <p className="hover:text-white cursor-pointer">Blog</p>
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          </div>

        
          <div className="flex gap-[12px]">
            <div className="w-[38px] h-[38px] border border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition cursor-pointer">
              <img src={twitter} alt="" className="w-[16px]" />
            </div>

            <div className="w-[38px] h-[38px] border border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition cursor-pointer">
              <img src={linkedin} alt="" className="w-[16px]" />
            </div>

            <div className="w-[38px] h-[38px] border border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition cursor-pointer">
              <img src={facebook} alt="" className="w-[12px]" />
            </div>
          </div>

        </div>
      </div>

    </div>
    
    </div>
  );
};

export default Layout;