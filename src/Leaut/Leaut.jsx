import React, { Component } from "react";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.svg";

class Leaut extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
        <nav className="w-full pt-[20px] px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1400px] mx-auto bg-[#f5f5f5] px-[20px] md:px-[35px] lg:px-[40px] py-[22px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[20px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[45px]">
              <div className="flex items-center gap-[12px]">
                <img src={logo} alt="" className="w-[34px] h-[34px]" />
              </div>

              <div className="flex flex-wrap items-center gap-[18px] md:gap-[28px] text-[15px] font-medium">
                <Link
                  to="/"
                  className="text-[#111111] font-bold hover:text-black transition"
                >
                  DISCOVER
                </Link>

                <Link
                  to="/About"
                  className="text-[#8d8d95] hover:text-black transition"
                >
                  CREATORS
                </Link>

                <Link
                  to="/user"
                  className="text-[#8d8d95] hover:text-black transition"
                >
                  SELL
                </Link>

                <Link
                  to="/user"
                  className="text-[#8d8d95] hover:text-black transition"
                >
                  STATS
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[15px]">
              <div className="bg-[#f2f2f2] rounded-[14px] px-[16px] h-[52px] flex items-center gap-[12px] min-w-[260px] md:min-w-[320px]">
                <span className="text-[#9e9ea7] text-[18px]">⌕</span>
                <input
                  type="text"
                  placeholder="Search Art Work / Creator"
                  className="bg-transparent outline-none w-full text-[14px] text-[#555] placeholder:text-[#b0b0b8]"
                />
              </div>

              <Link
                to="/user"
                className="bg-[#111118] text-white rounded-[14px] px-[28px] h-[52px] pt-[14px] text-[14px] font-bold hover:bg-[#1d1d27] transition text-center"
              >
                CONNECT WALLET
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Leaut;