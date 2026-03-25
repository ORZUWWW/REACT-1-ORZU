import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../img/logo.svg";


const Leaut = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-[#F3F5F7] flex justify-center border-b">
        <div className="w-[90%] h-[80px] flex items-center justify-between">

          <div className="flex items-center gap-[40px]">
            <img src={logo} alt="logo" className="w-[120px]" />

            <nav className="flex gap-[25px] text-[#2C3E50]">
              <Link to="/">Courses</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>

       <div className="flex items-center gap-[20px]">

  <div className="w-[50px] h-[50px] bg-white rounded-[15px] shadow flex items-center justify-center text-[22px] cursor-pointer">
    ☀️
  </div>


  <div className="flex items-center gap-[10px] bg-white px-[15px] py-[8px] rounded-[15px] shadow cursor-pointer">
    <img
      src="https://flagcdn.com/w40/us.png"
      alt="flag"
      className="w-[25px] h-[25px] rounded-full"
    />
    <span className="text-[18px]">En</span>
  </div>

  <button className="border border-[#1E88C8] text-[#1E88C8] px-[20px] py-[8px] rounded-[10px] hover:bg-[#1E88C8] hover:text-white transition">
    Login
  </button>

</div>

        </div>
      </header>

   
      <main className="flex-1">
        <Outlet />
      </main>

      
      <footer className="w-full bg-[#F3F5F7] flex justify-center py-[60px]">
        <div className="w-[90%] flex justify-between">

          <div className="flex flex-col gap-[20px] w-[300px]">
            <img src={logo} alt="logo" className="w-[120px]" />
            <p className="text-[20px] text-[#2C3E50] leading-[30px]">
              Master an in-demand IT profession and start earning
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[22px] font-semibold text-[#2C3E50]">
              Navigation
            </h2>
            <p className="text-[#555]">Sign up for a course</p>
            <p className="text-[#555]">Courses</p>
            <p className="text-[#555]">News</p>
            <p className="text-[#555]">About us</p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[22px] font-semibold text-[#2C3E50]">
              Contacts
            </h2>
            <p className="text-[#555]">info@softclub.tj</p>
            <p className="text-[#555]">(+992) 558 700 900</p>
            <p className="text-[#555] w-[250px]">
              Rahimi street 12, landmark: Profsoyuz
            </p>

            <div className="flex gap-[15px] mt-[10px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#1877F2] flex items-center justify-center text-white">
                f
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#1DA1F2] flex items-center justify-center text-white">
                💬
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#E1306C] flex items-center justify-center text-white">
                📸
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#25D366] flex items-center justify-center text-white">
                🟢
              </div>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
};

export default Leaut;