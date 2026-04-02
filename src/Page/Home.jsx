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
      <div className="min-h-screen bg-[#988cf3] px-4 py-6">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-[#efefef] shadow-xl">
          

          <div className="relative overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pb-14 md:pt-10">
            <div className="absolute right-0 top-0 hidden h-[360px] w-[56%] bg-[#f4e8bf] md:block [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]"></div>

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

            <div className="relative z-10">
              <h2 className="text-center text-[44px] font-extrabold leading-[0.95] text-[#2d3436] md:text-[74px]">
                Combine{" "}
                <span className="relative inline-block text-[#ef3e36]">
                  fine
                  <span className="absolute bottom-1 left-0 -z-10 h-4 w-full rounded-full bg-[#2ed8b6] md:h-5"></span>
                </span>{" "}
                images
              </h2>

              <p className="mt-3 text-center text-[28px] font-extrabold leading-none text-[#2d3436] md:text-[42px]">
                To represent a product
              </p>
            </div>

            <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
              <div className="flex flex-col gap-4">
                <p className="max-w-[190px] text-[15px] leading-8 text-[#5d6875]">
                  Use mixed grid with imagery, replace with your own photos and
                  descriptions
                </p>

                <div className="overflow-hidden rounded-[24px] bg-black text-white">
                  <div className="p-6">
                    <h3 className="max-w-[170px] text-[16px] font-bold leading-8">
                      We aimed to deliver HQ templates for Figma
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      Used by 123 people
                    </p>
                  </div>

                  <img
                    src={this.img1}
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div className="w-fit rounded-full bg-[#6c5ce7] px-8 py-4 text-[18px] font-bold text-white">
                  Learn more
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid gap-4 md:grid-cols-[1.45fr_0.7fr_0.7fr]">
                  <div className="overflow-hidden rounded-[24px] shadow-sm">
                    <div className="relative h-[195px] w-full">
                      <img
                        src={this.img2}
                        className="h-full w-full object-cover"
                      />
                      <p className="absolute bottom-4 left-5 text-[26px] font-extrabold text-white drop-shadow-lg">
                        Consider it done!
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[24px] shadow-sm">
                    <img
                      src={this.img5}
                      className="h-[195px] w-full object-cover"
                    />
                  </div>

                  <div className="rounded-[24px] bg-[#2f80ed] shadow-sm">
                    <div className="flex h-[195px] items-center justify-center">
                      <img
                        src={this.img3}
                        className="h-24 w-24 rounded-[18px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_1.08fr_0.7fr]">
                  <div className="overflow-hidden rounded-[24px] shadow-sm">
                    <img
                      src={this.img4}
                      className="h-[182px] w-full object-cover"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px] shadow-sm">
                    <div className="relative h-[182px] w-full">
                      <img
                        src={this.img5}
                        className="h-full w-full object-cover opacity-90"
                      />
                      <p className="absolute left-5 top-3 text-[22px] font-extrabold text-white drop-shadow-lg">
                        See my goal?
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[24px] shadow-sm">
                    <img
                      src={this.img7}
                      className="h-[182px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid items-start gap-4 md:grid-cols-[1fr_0.7fr_0.7fr]">
                  <div className="text-[15px] leading-8 text-[#5d6875]">
                    This is multipurpose grid, it fits for portfolio, services
                    or agency web site
                  </div>

                  <div className="rounded-[24px] bg-[#2f80ed] shadow-sm md:col-start-3">
                    <div className="flex h-[160px] items-center justify-center">
                      <img
                        src={this.img6}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 <div className="min-h-screen bg-[#9a8ff0]  px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto max-w-[1200px] rounded-2xl bg-[#f3f3f3] px-6 py-10 sm:px-10 md:px-16 md:py-16">
          <div className="max-w-[760px]">
            <h1 className="text-[28px] font-bold leading-tight text-[#333333] sm:text-[34px] md:text-[40px]">
              Delivering good designs since 1954 🚚💨
            </h1>

            <p className="mt-4 text-[16px] leading-8 text-[#555555] sm:text-[18px]">
              We’re the first multi-purpose design kit solutions for businesses.
              We help you bridge gaps between your layouts, templates and
              developers to empower all involved.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ea4c89] text-[24px] text-white">
                ☎
              </div>

              <h2 className="mt-6 text-[28px] font-bold text-[#333333]">
                Support
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-[#555555]">
                Delivering faster and more personalized support with shared
                screens and cool design systems for Figma
              </p>

              <button className="mt-6 rounded-[14px] border border-[#d3d3d3] px-6 py-3 text-[15px] font-semibold text-[#6c63ff]">
                Learn more
              </button>
            </div>

            <div>
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#1e88e5] text-[24px] text-white">
                ◔
              </div>

              <h2 className="mt-6 text-[28px] font-bold text-[#333333]">
                Sales growth
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-[#555555]">
                Identify qualified customers with easy-to-use live chat
                messaging and AI-based Sales Bot
              </p>

              <button className="mt-6 rounded-[14px] border border-[#d3d3d3] px-6 py-3 text-[15px] font-semibold text-[#6c63ff]">
                Learn more
              </button>
            </div>

            <div>
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#6c63ff] text-[24px] text-white">
                ⚡
              </div>

              <h2 className="mt-6 text-[28px] font-bold text-[#333333]">
                Coponents-driven
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-[#555555]">
                Delivering faster and more personalized support with shared
                screens and cool design systems for Figma
              </p>

              <button className="mt-6 rounded-[14px] border border-[#d3d3d3] px-6 py-3 text-[15px] font-semibold text-[#6c63ff]">
                Learn more
              </button>
            </div>

            <div>
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#12c7a3] text-[24px] text-white">
                👍
              </div>

              <h2 className="mt-6 text-[28px] font-bold text-[#333333]">
                Swap the icon
              </h2>

              <p className="mt-3 text-[17px] leading-8 text-[#555555]">
                You can toggle to any icon within Instances and customize
                outlined stroke to more bolder or lighter
              </p>

              <button className="mt-6 rounded-[14px] border border-[#d3d3d3] px-6 py-3 text-[15px] font-semibold text-[#6c63ff]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>



 <div className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-[1250px]">
          <div className="text-center">
            <h1 className="text-[42px] font-extrabold leading-tight text-[#2f3437] sm:text-[56px] md:text-[72px]">
              Affordable pricing
            </h1>

            <p className="mt-4 text-[24px] font-bold text-[#b1b1b1] sm:text-[30px] md:text-[40px]">
              Bill me{" "}
              <span className="relative inline-block text-[#6c63ff]">
                monthly
                <span className="absolute bottom-1 left-0 h-[8px] w-full rounded-full bg-[#f4d35e] md:h-[10px]"></span>
              </span>{" "}
              • yearly
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-[28px] px-6 py-8">
              <div>
                <p className="text-[20px] font-bold text-[#6c63ff]">
                  Like a pussy
                </p>

                <div className="mt-5 flex items-end gap-3">
                  <h2 className="text-[52px] font-extrabold leading-none text-[#2f3437]">
                    Free
                  </h2>
                  <span className="pb-2 text-[14px] font-bold uppercase tracking-[3px] text-[#2f3437]">
                    / Forever
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#dedede] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Components-driven system
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#dedede] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Sales-boosting landing pages
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#dedede] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Awesome Feather icons pack
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-10 h-[68px] rounded-[18px] border border-[#bfbfbf] text-[24px] font-bold text-[#6c63ff]">
                Try for free
              </button>
            </div>

            <div className="relative rounded-[28px] bg-white px-6 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[20px] font-bold text-[#6c63ff]">
                  👤 Individual
                </p>

                <div className="rounded-full border border-[#6c63ff] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[3px] text-[#2f3437]">
                  Best!
                </div>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <h2 className="text-[52px] font-extrabold leading-none text-[#2f3437]">
                  $24
                </h2>
                <span className="pb-2 text-[14px] font-bold uppercase tracking-[3px] text-[#2f3437]">
                  / Month
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f3c45c] text-[16px] text-black">
                    ✓
                  </div>
                  <p className="text-[18px] text-[#4b4f52]">
                    Components-driven system
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f3c45c] text-[16px] text-black">
                    ✓
                  </div>
                  <p className="text-[18px] text-[#4b4f52]">
                    Sales-boosting landing pages
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f3c45c] text-[16px] text-black">
                    ✓
                  </div>
                  <p className="text-[18px] text-[#4b4f52]">
                    Awesome Feather icons pack
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f3c45c] text-[16px] text-black">
                    ✓
                  </div>
                  <p className="text-[18px] text-[#4b4f52]">
                    Themed into 3 different styles
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#f3c45c] text-[16px] text-black">
                    ✓
                  </div>
                  <p className="text-[18px] text-[#4b4f52]">
                    Will help to learn Figma
                  </p>
                </div>
              </div>

              <button className="mt-10 h-[68px] w-full rounded-[18px] bg-[#6c63ff] text-[28px] font-bold text-white">
                Regular license
              </button>
            </div>

            <div className="flex flex-col justify-between rounded-[28px] px-6 py-8">
              <div>
                <p className="text-[20px] font-bold text-[#6c63ff]">
                  👥 Corporate
                </p>

                <div className="mt-5 flex items-end gap-3">
                  <h2 className="text-[52px] font-extrabold leading-none text-[#2f3437]">
                    $12
                  </h2>
                  <span className="pb-2 text-[14px] font-bold uppercase tracking-[3px] text-[#2f3437]">
                    / Editor
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#9ee7d6] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Components-driven system
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#9ee7d6] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Sales-boosting landing pages
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#9ee7d6] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Awesome Feather icons pack
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#9ee7d6] text-[16px] text-black">
                      ✓
                    </div>
                    <p className="text-[18px] text-[#4b4f52]">
                      Themed into 3 different styles
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-10 h-[68px] rounded-[18px] border border-[#bfbfbf] text-[24px] font-bold text-[#6c63ff]">
                Extended license
              </button>
            </div>
          </div>
        </div>
      </div>




      </div>
    );
  }
}

export default Counter;