import React, { Component } from "react";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import logo from "../../public/images/logo.svg";
import i18n from "../i18";

class Leaut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: i18n.language || "en",
    };
  }

  changeLang = (value) => {
    i18n.changeLanguage(value);
    this.setState({ lang: value });
  };

  render() {
    return (
      <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
        <nav className="w-full pt-[20px] px-[16px] sm:px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1400px] mx-auto bg-[#f5f5f5] px-[16px] sm:px-[20px] md:px-[35px] lg:px-[40px] py-[22px] flex flex-col xl:flex-row xl:items-center xl:justify-between gap-[20px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[45px]">
              <div className="flex items-center gap-[12px] justify-center xl:justify-start">
                <img src={logo} alt="" className="w-[104px] h-[34px]" />
              </div>

              <div className="flex flex-wrap justify-center xl:justify-start items-center gap-[18px] md:gap-[28px] text-[15px] font-medium">
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

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center xl:justify-end gap-[12px]">
              <div className="bg-white border border-[#e7e7ec] shadow-sm rounded-[18px] p-[6px] flex items-center justify-center gap-[6px]">
                <button
                  onClick={() => this.changeLang("ru")}
                  className={`px-[18px] h-[44px] rounded-[12px] text-[14px] font-bold transition-all duration-300 ${
                    this.state.lang === "ru"
                      ? "bg-black text-white"
                      : "bg-[#f3f3f6] text-black hover:bg-black hover:text-white"
                  }`}
                >
                  RU
                </button>

                <button
                  onClick={() => this.changeLang("en")}
                  className={`px-[18px] h-[44px] rounded-[12px] text-[14px] font-bold transition-all duration-300 ${
                    this.state.lang === "en"
                      ? "bg-black text-white"
                      : "bg-[#f3f3f6] text-black hover:bg-black hover:text-white"
                  }`}
                >
                  US
                </button>
              </div>

              <Link
                to="/user"
                className="bg-[#111118] text-white rounded-[14px] px-[24px] sm:px-[28px] h-[52px] flex items-center justify-center text-[14px] font-bold hover:bg-[#1d1d27] transition text-center"
              >
                {i18n.t("connectWallet")}
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