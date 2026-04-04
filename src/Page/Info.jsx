import React, { useState } from "react";
import { useParams } from "react-router-dom";

const s1 = "/images/s1.png";
const s2 = "/images/s2.png";
const s3 = "/images/s5.png";
const s4 = "/images/s4.png";
const s5 = "/images/s6.png";
const d11 = "/images/d1.svg";
const d22 = "/images/d2.svg";

const divinfo = [
  { id: 1, img: s2, category: "Sun-Glass", price: "16,4" },
  { id: 2, img: s3, category: "Sun-Glass", price: "16,4" },
  { id: 3, img: s5, category: "Sun-Glass", price: "16,4" },
  { id: 4, img: s4, category: "Sun-Glass", price: "16,4" },
  { id: 5, img: s1, category: "Sun-Glass", price: "16,4" },
];

function Info() {
  const { id } = useParams();

  const [data] = useState([
    {
      category: "Sun-Glasss",
      collection: "Current biddd",
      img: "/images/s1.png",
      price: "1.75",
      id: "1",
      time: "07h 09m 12s",
    },
    {
      category: "Sun-Glasss",
      collection: "Current biddd",
      img: "/images/s2.png",
      price: "1.75",
      id: "2",
      time: "07h 09m 12s",
    },
    {
      category: "Sun-Glass",
      collection: "Current bid",
      img: "/images/s5.png",
      price: "1.75",
      id: "3",
      time: "07h 09m 12s",
    },
    {
      category: "NuEvey",
      collection: "Current bid",
      img: "/images/s4.png",
      price: "1.25",
      id: "4",
      time: "09h 09m 12s",
    },
    {
      category: "Sun-Glass",
      collection: "Current bidl",
      img: "/images/s5.png",
      price: "1.75",
      id: "5",
      time: "07h 09m 12s",
    },
    {
      category: "NuEvey",
      collection: "Current bid",
      img: "/images/s6.png",
      price: "1.25",
      id: "6",
      time: "19h 09m 12s",
    },
    {
      category: "Sun-Glass",
      collection: "Current bid",
      img: "/images/s2.png",
      price: "1.75",
      id: "7",
      time: "07h 09m 12s",
    },
    {
      category: "Sun-Glass",
      collection: "Current bid",
      img: "/images/s1.png",
      price: "1.75",
      id: "8",
      time: "12h 09m 12s",
    },
  ]);

  const oneData = data.find((e) => e.id == id);

  if (!oneData) {
    return <h1 className="text-center py-[60px] text-[28px]">Loading...</h1>;
  }

  return (
    <div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-[60px]">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[28px] md:text-[32px] font-bold mb-[30px]">
          Product Detail
        </h1>

        <div className="bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-[24px] md:p-[30px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
          <div>
            <img
              src={oneData.img}
              alt=""
              className="w-full h-[320px] md:h-[420px] object-cover rounded-[22px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[36px] md:text-[54px] leading-[100%] font-extrabold text-[#2b2b39] mb-[18px]">
              {oneData.category}
            </h1>

            <p className="text-[#a1a1aa] text-[15px] md:text-[18px] leading-[30px] max-w-[520px] mb-[28px]">
              A collection of 10,000 utility-enabled PFPs that feature a richly
              diverse and unique pool of rarity-powered traits.
            </p>

            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[35px] mb-[35px]">
              <div className="flex items-center gap-[12px]">
                <img
                  src={d11}
                  alt=""
                  className="w-[56px] h-[56px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] text-[#a1a1aa]">Created by</p>
                  <h2 className="text-[18px] font-bold text-[#1f2937]">
                    Perperzon
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img
                  src={d22}
                  alt=""
                  className="w-[56px] h-[56px] rounded-full object-cover"
                  />
                <div>
                  <p className="text-[14px] text-[#a1a1aa]">Owned by</p>
                  <h2 className="text-[18px] font-bold text-[#1f2937]">
                    Videz
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end mb-[35px]">
              <div>
                <p className="text-[14px] text-[#a1a1aa] mb-[8px]">
                  Current Bid
                </p>
                <h2 className="text-[22px] md:text-[34px] font-extrabold text-[#2b2b39] flex items-center gap-[8px]">
                  <span className="text-[28px]">♦</span>
                  {oneData.price}
                </h2>
              </div>

              <div className="text-right">
                <p className="text-[14px] text-[#a1a1aa] mb-[8px]">End in</p>
                <h2 className="text-[16px] md:text-[20px] font-medium text-[#2b2b39]">
                  Jun 17, 2023 at 05:08
                </h2>
              </div>
            </div>

            <button className="w-full bg-[#0c0c12] text-white rounded-[18px] py-[18px] text-[16px] md:text-[18px] font-bold hover:bg-[#1b1b25] transition">
              Place Bid
            </button>
          </div>
        </div>

        <div className="w-full mt-[60px]">
          <h1 className="text-[34px] font-extrabold text-[#d0d0d0] mb-[30px]">
            From Creator
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[22px]">
            {divinfo.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-[18px] p-[8px] shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={e.img}
                  alt=""
                  className="w-full h-[140px] object-cover rounded-[14px]"
                />

                <div className="pt-[10px]">
                  <div className="flex items-center gap-[4px] mb-[6px]">
                    <p className="text-[11px] font-semibold text-[#1a1a1a]">
                      Perperzon
                    </p>
                    <span className="w-[8px] h-[8px] rounded-full bg-blue-500 inline-block"></span>
                  </div>

                  <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[10px]">
                    {e.category}
                  </h2>

                  <div className="flex justify-between items-center">
                    <h3 className="text-[18px] font-bold text-[#1a1a1a] flex items-center gap-[4px]">
                      ♦ {e.price}
                    </h3>

                    <p className="text-[13px] text-gray-400">♡ 200</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;