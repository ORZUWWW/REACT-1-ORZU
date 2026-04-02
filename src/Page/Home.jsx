import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.img4 = img4;
    this.img5 = img5;
    this.img6 = img6;
    this.img7 = img7;
  }

  render() {
    return (
      <div className="min-h-screen bg-[#978cf3] px-4 py-6">
        <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[28px] bg-[#efefef] shadow-xl">
          <header className="flex items-center justify-between border-b border-black/10 bg-[#f8f8f8] px-6 py-4 md:px-10">
            <div className="flex items-center gap-4 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[#6c5ce7] text-[#6c5ce7]">
                  <span className="text-lg font-bold">⊞</span>
                </div>
                <h1 className="text-[24px] font-extrabold text-[#2d3436]">
                  Grid
                </h1>
              </div>

              <nav className="hidden md:flex md:items-center md:gap-7">
                <a href="#" className="text-[14px] font-semibold text-[#2d3436]">
                  How it works
                </a>
                <a href="#" className="text-[14px] text-[#6c5ce7]">
                  Who we are
                </a>
                <a href="#" className="text-[14px] text-[#6c5ce7]">
                  What we do
                </a>
                <a href="#" className="text-[14px] text-[#6c5ce7]">
                  Contact us
                </a>
              </nav>
            </div>

            <button className="rounded-full bg-[#6c5ce7] px-6 py-2 text-sm font-bold text-white md:px-10 md:py-3">
              Sign In
            </button>
          </header>

          <main className="relative overflow-hidden px-6 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10">
            <div className="absolute right-0 top-0 hidden h-[350px] w-[56%] bg-[#f4e8bf] md:block [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]"></div>

            <div className="absolute right-10 top-8 hidden md:grid md:grid-cols-5 md:gap-4">
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>

              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>

              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>

              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
              <span className="h-3 w-3 rounded-full bg-[#efb74f]"></span>
            </div>

            <section className="relative z-10">
              <h2 className="text-center text-[42px] font-extrabold leading-[0.95] text-[#2d3436] md:text-[74px]">
                Combine{" "}
                <span className="relative inline-block text-[#ef3e36]">
                  fine
                  <span className="absolute bottom-1 left-0 -z-10 h-4 w-full rounded-full bg-[#2ed8b6] md:h-5"></span>
                </span>{" "}
                images
              </h2>

              <p className="mt-3 text-center text-[26px] font-extrabold leading-none text-[#2d3436] md:text-[42px]">
                To represent a product
              </p>
            </section>

            <section className="relative z-10 mt-10 grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
              <div className="flex flex-col gap-5">
                <p className="max-w-[190px] text-[15px] leading-8 text-[#5d6875]">
                  Use mixed grid with imagery, replace with your own photos and
                  descriptions
                </p>

                <div className="overflow-hidden rounded-[24px] bg-black text-white shadow-md">
                  <div className="p-6">
                    <h3 className="max-w-[170px] text-[16px] font-bold leading-8">
                      We aimed to deliver HQ templates for Figma
                    </h3>
                    <p className="mt-2 text-sm text-white/80">Used by 123 people</p>
                  </div>

                  <img
                    src={this.img1}
                    alt="img1"
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <button className="w-fit rounded-full bg-[#6c5ce7] px-8 py-4 text-[18px] font-bold text-white">
                  Learn more
                </button>
              </div>

              <div className="grid grid-cols-3 gap-5 md:grid-cols-[330px_110px_120px] md:grid-rows-[214px_194px_auto]">
                <div className="overflow-hidden rounded-[24px] shadow-md">
                  <div className="relative h-full w-full">
                    <img
                      src={this.img2}
                      alt="img2"
                      className="h-full w-full object-cover"
                    />
                    <p className="absolute bottom-4 left-5 text-[28px] font-extrabold text-white drop-shadow-lg">
                      Consider it done!
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-[24px] bg-[#dddddd] shadow-md">
                  <img
                    src={this.img5}
                    alt="img5"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-center rounded-[24px] bg-[#2386e8] shadow-md">
                  <img
                    src={this.img3}
                    alt="img3"
                    className="h-24 w-24 rounded-[18px] object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[24px] shadow-md">
                  <img
                    src={this.img4}
                    alt="img4"
                    className="h-[194px] w-full object-cover"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded-[24px] bg-[#ececec] shadow-md md:col-span-1">
                  <div className="relative h-[194px] w-full">
                    <img
                      src={this.img5}
                      alt="img5"
                      className="h-full w-full object-cover opacity-90"
                    />
                    <p className="absolute left-4 top-3 text-[22px] font-extrabold text-white drop-shadow-lg">
                      See my goal?
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-[24px] bg-[#2386e8] shadow-md">
                  <img
                    src={this.img6}
                    alt="img6"
                    className="h-24 w-24 object-contain"
                  />
                </div>

                <div className="col-span-3">
                  <div className="flex items-start justify-between gap-5">
                    <p className="max-w-[320px] text-[15px] leading-8 text-[#5d6875]">
                      This is multipurpose grid, it fits for portfolio, services
                      or agency web site
                    </p>

                    <div className="hidden overflow-hidden rounded-[24px] shadow-md md:block md:h-[140px] md:w-[120px]">
                      <img
                        src={this.img7}
                        alt="img7"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 grid grid-cols-2 gap-4 md:hidden">
              <div className="overflow-hidden rounded-[20px] shadow-md">
                <img
                  src={this.img7}
                  alt="img7"
                  className="h-[150px] w-full object-cover"
                />
              </div>

              <div className="rounded-[20px] bg-white p-4 shadow-md">
                <h3 className="text-lg font-extrabold text-[#2d3436]">
                  Delivering good designs
                </h3>
                <p className="mt-2 text-sm text-[#6c5ce7]">since 1954</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Counter;