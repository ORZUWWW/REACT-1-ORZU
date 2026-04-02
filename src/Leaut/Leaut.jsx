import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation();

  return (
    <div className="bg-[#9b8ff3] min-h-screen">
      <div className="px-4 pt-3 md:px-6 md:pt-4">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-t-[34px] bg-[#f5f5f5]">
          <nav className="flex flex-col gap-5 px-5 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
              <div className="flex items-center gap-4">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border-2 border-[#6c63ff] text-[#6c63ff]">
                  ⊞
                </div>

                <h1 className="text-[34px] font-extrabold leading-none text-[#2f3437]">
                  Grid
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  to="/"
                  className="text-[18px] font-semibold text-[#2f3437]"
                >
                  How it works
                </Link>

                <Link
                  to="/About"
                  className="text-[18px] font-medium text-[#6c63ff]"
                >
                  Who we are
                </Link>

                <Link
                  to="/What"
                  className="text-[18px] font-medium text-[#6c63ff]"
                >
                  What we do
                </Link>

                <Link
                  to="/Contact"
                  className="text-[18px] font-medium text-[#6c63ff]"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => i18n.changeLanguage("ru")}
                className="rounded-full border border-[#6c63ff] px-4 py-2 text-[14px] font-bold text-[#6c63ff]"
              >
                RU
              </button>

              <button
                onClick={() => i18n.changeLanguage("en")}
                className="rounded-full border border-[#6c63ff] px-4 py-2 text-[14px] font-bold text-[#6c63ff]"
              >
                EN
              </button>

              <button className="h-[56px] min-w-[160px] rounded-full bg-[#6c63ff] px-8 text-[18px] font-extrabold text-white">
                Sign In
              </button>
            </div>
          </nav>

          <Outlet />

          <footer className="mt-0">
            <div className="px-6 py-10 md:px-10 lg:px-16 lg:py-14">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[4px] text-[#b7b7b7]">
                    Follow us
                  </p>

                  <div className="mt-5 flex items-center gap-6">
                    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#f3d97d] text-[20px] font-bold text-[#6c63ff]">
                      f
                    </div>
                    <div className="text-[28px] font-bold text-[#6c63ff]">
                      in
                    </div>
                    <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#6c63ff] text-[14px] font-bold text-[#6c63ff]">
                      ⌘
                    </div>
                    <div className="text-[26px] font-bold text-[#6c63ff]">
                      t
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="text-[12px] font-extrabold uppercase tracking-[4px] text-[#b7b7b7]">
                      Information
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 text-[16px] text-[#4c4c4c] sm:grid-cols-2 md:grid-cols-3">
                      <p>About Fapster app</p>
                      <p className="underline underline-offset-4">
                        Onhovered / Active
                      </p>
                      <p>We are hiring!</p>

                      <p>Get in Touch</p>
                      <p>Privacy Policy</p>
                      <p>Resources</p>

                      <p>Things We Like</p>
                      <p>Terms of Service</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[4px] text-[#b7b7b7]">
                    Follow us
                  </p>

                  <h2 className="mt-3 text-[28px] font-extrabold text-[#6c63ff] md:text-[42px]">
                    hello@fapsterapp.com
                  </h2>

                  <div className="mt-10">
                    <p className="text-[12px] font-extrabold uppercase tracking-[4px] text-[#b7b7b7]">
                      Keep in touch
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="flex h-[58px] items-center justify-between rounded-[16px] bg-[#ececec] px-5">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full bg-transparent text-[18px] text-[#4c4c4c] outline-none placeholder:text-[#6b6b6b]"
                        />
                        <span className="ml-3 text-[22px] text-[#a6a6a6]">
                          ◔
                        </span>
                      </div>

                      <div className="flex h-[58px] items-center justify-between rounded-[16px] bg-[#ececec] px-5">
                        <input
                          type="text"
                          placeholder="E-mail"
                          className="w-full bg-transparent text-[18px] text-[#4c4c4c] outline-none placeholder:text-[#6b6b6b]"
                        />
                        <span className="ml-3 text-[22px] text-[#a6a6a6]">
                          ✉
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_180px]">
                      <div className="flex h-[68px] items-start justify-between rounded-[18px] border border-[#cfc7ff] bg-transparent px-5 py-4">
                        <textarea
                          placeholder="Leave your message|"
                          className="h-full w-full resize-none bg-transparent text-[18px] font-bold text-[#6c63ff] outline-none placeholder:text-[#6c63ff]"
                        ></textarea>
                        <span className="ml-3 text-[22px] text-[#6c63ff]">
                          ✎
                        </span>
                      </div>

                      <button className="h-[68px] rounded-[18px] bg-[#6c63ff] text-[20px] font-extrabold text-white shadow-lg">
                        SEND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[90px] w-full bg-[#f3df95] [border-top-left-radius:45%_70px] [border-top-right-radius:25%_70px]"></div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;