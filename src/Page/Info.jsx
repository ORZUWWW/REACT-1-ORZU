import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s1.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import d11 from "../images/d1.svg";
import d22 from "../images/d2.svg";

let url = "http://localhost:3000/users";

const divinfo = [
  { id: 1, img: s2, category: "Sun-Glass", price: "16,4" },
  { id: 2, img: s3, category: "Sun-Glass", price: "16,4" },
  { id: 3, img: s5, category: "Sun-Glass", price: "16,4" },
  { id: 4, img: s4, category: "Sun-Glass", price: "16,4" },
  { id: 5, img: s1, category: "Sun-Glass", price: "16,4" },
];

function Info() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  async function getById() {
    try {
      let { data } = await axios.get(`${url}/${id}`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getById();
  }, [id]);

  if (!data) {
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
              src={data.img}
              alt=""
              className="w-full h-[320px] md:h-[420px] object-cover rounded-[22px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[36px] md:text-[54px] leading-[100%] font-extrabold text-[#2b2b39] mb-[18px]">
              {data.category}
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
                  {data.price}
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










<div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-[80px]">
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[30px]">

    {/* LEFT - CHART */}
    <div className="lg:col-span-2 bg-white rounded-[24px] p-[25px] shadow-md">
      
      <div className="flex justify-between items-center mb-[25px]">
        <h2 className="text-[20px] font-bold text-[#1a1a1a]">
          Bid History
        </h2>

        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[6px] text-[14px] text-[#555]">
            <span className="w-[10px] h-[2px] bg-black"></span>
            Expenses
          </div>

          <div className="bg-[#f3f3f3] px-[12px] py-[6px] rounded-[10px] text-[13px] text-[#555]">
            Jun 10 - Jun 16 ▾
          </div>
        </div>
      </div>

      {/* FAKE GRAPH */}
      <div className="relative h-[220px] flex items-end justify-between px-[10px]">
        <div className="absolute inset-0 flex flex-col justify-between text-[12px] text-gray-400">
          <span>2.0</span>
          <span>1.5</span>
          <span>1.0</span>
          <span>0.5</span>
          <span>0</span>
        </div>

        <div className="w-full h-full flex items-end">
          <div className="w-full h-[2px] bg-gray-200 absolute bottom-0"></div>

          {/* линия */}
          <svg
            viewBox="0 0 500 200"
            className="w-full h-full"
          >
            <path
              d="M0,150 
                 C50,170 80,170 100,130 
                 C120,90 150,110 180,90
                 C210,70 250,120 280,80
                 C310,50 350,60 380,90
                 C410,110 450,100 500,130"
              fill="none"
              stroke="#111"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* точка */}
        <div className="absolute right-[120px] top-[90px] w-[12px] h-[12px] border-2 border-black rounded-full bg-white"></div>

        {/* label */}
        <div className="absolute right-[90px] top-[60px] bg-black text-white text-[12px] px-[10px] py-[4px] rounded-[8px]">
          1.3 ETH
        </div>
      </div>

      {/* bottom tabs */}
      <div className="flex justify-center gap-[25px] mt-[20px] text-[14px] text-gray-400">
        <span>1D</span>
        <span className="bg-[#f3f3f3] px-[10px] py-[4px] rounded-[8px] text-black">
          5D
        </span>
        <span>1M</span>
        <span>3M</span>
        <span>6M</span>
        <span>1Y</span>
        <span>2Y</span>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white rounded-[24px] p-[20px] shadow-md">
      
      <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-[5px]">
        History of Bid
      </h2>
      <p className="text-[12px] text-gray-400 mb-[20px]">
        Oct 14, 2022
      </p>

      {/* item */}
      <div className="bg-[#f8f8f8] rounded-[14px] p-[12px] flex justify-between items-center mb-[12px]">
        <div className="flex items-center gap-[10px]">
          <img src={s2} className="w-[40px] h-[40px] rounded-full" />
          <div>
            <h3 className="text-[14px] font-bold">Repo</h3>
            <p className="text-[11px] text-gray-400">
              May 17, 2022 at 12:08
            </p>
          </div>
        </div>

        <h3 className="text-[14px] font-bold">♦ 1.55</h3>
      </div>

      <div className="bg-[#f8f8f8] rounded-[14px] p-[12px] flex justify-between items-center mb-[20px]">
        <div className="flex items-center gap-[10px]">
          <img src={s1} className="w-[40px] h-[40px] rounded-full" />
          <div>
            <h3 className="text-[14px] font-bold">Travo</h3>
            <p className="text-[11px] text-gray-400">
              May 16, 2022 at 12:08
            </p>
          </div>
        </div>

        <h3 className="text-[14px] font-bold">♦ 1.40</h3>
      </div>

      {/* form */}
      <h3 className="text-[14px] font-medium mb-[10px]">
        Your Bid
      </h3>

      <div className="flex gap-[10px] mb-[15px]">
        <div className="bg-black text-white px-[14px] py-[10px] rounded-[10px] text-[13px]">
          ETH ▾
        </div>

        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-[10px] px-[12px] outline-none"
        />
      </div>

      <button className="w-full bg-black text-white py-[12px] rounded-[12px] font-semibold hover:bg-[#222] transition">
        Submit
      </button>
    </div>

  </div>
</div>

























          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[22px]">
            {divinfo.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[18px] p-[8px] shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.img}
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
                    {item.category}
                  </h2>

                  <div className="flex justify-between items-center">
                    <h3 className="text-[18px] font-bold text-[#1a1a1a] flex items-center gap-[4px]">
                      ♦ {item.price}
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