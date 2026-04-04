import React from 'react'

import divimg from "../images/divimg.png";
import user from "../images/dima.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s5.png";



const User = () => {

const collection = [
    { id: 1,
       img: s1, 
       title: "Sun-Glass",
        price: "1.75", 
        time: "07h 09m 12s" },

    { id: 2, 
      img: s2,
       title: "Sun-Glass",
        price: "1.75",
         time: "07h 09m 12s" },
    { id: 3, 
      img: s3,
       title: "Sun-Glass",
        price: "1.75",
         time: "07h 09m 12s" },
    { id: 4, 
      img: s3,
       title: "Sun-Glass",
        price: "1.75",
         time: "07h 09m 12s" },
    { id: 5, 
      img: s1,
       title: "Sun-Glass",
        price: "1.75",
         time: "07h 09m 12s" },
    { id: 6, 
      img: s2,
       title: "Sun-Glass",
        price: "1.75",
         time: "07h 09m 12s" },
  ];




  return (
    <>


<div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-[50px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full h-[190px] md:h-[240px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <img
            src={divimg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-[40px] mt-[25px]">
       
          <div>
            <div className="relative w-fit -mt-[75px]">
              <div className="w-[105px] h-[105px] rounded-full p-[4px] bg-white shadow-lg">
                <img
                  src={user}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <span className="absolute bottom-[8px] right-[8px] w-[16px] h-[16px] rounded-full bg-[#2563eb] border-[2px] border-white"></span>
            </div>

            <div className="mt-[14px] flex items-center justify-between gap-[12px]">
              <div>
                <h1 className="text-[36px] leading-[100%] font-extrabold text-[#17181d]">
                  Harry K.
                </h1>
                <p className="text-[14px] text-[#9ca3af] mt-[8px]">
                  @Harryknft
                </p>
              </div>

              <button className="bg-black text-white px-[20px] py-[12px] rounded-[12px] text-[13px] font-bold hover:bg-[#222] transition">
                FOLLOW +
              </button>
            </div>

            <div className="border-t border-[#e5e7eb] mt-[28px] pt-[24px] grid grid-cols-3 gap-[18px]">
              <div>
                <h2 className="text-[22px] font-extrabold text-[#17181d]">86 ETH</h2>
                <p className="text-[12px] text-[#9ca3af] mt-[4px]">Total Sales</p>
              </div>

              <div>
                <h2 className="text-[22px] font-extrabold text-[#17181d]">12K</h2>
                <p className="text-[12px] text-[#9ca3af] mt-[4px]">Followers</p>
              </div>

              <div>
                <h2 className="text-[22px] font-extrabold text-[#17181d]">587</h2>
                <p className="text-[12px] text-[#9ca3af] mt-[4px]">Following</p>
              </div>
            </div>

            <div className="border-t border-[#e5e7eb] mt-[34px] pt-[24px]">
              <h3 className="text-[30px] font-extrabold text-[#d4d4d8] mb-[16px]">
                Bio
              </h3>

              <p className="text-[14px] leading-[28px] text-[#9ca3af] max-w-[280px]">
                The Artist Who Transforms The Intangible Into Priceless Assets
                With Their Incredible NFT Creations, From Stunning Visuals To
                Mind-Bending Concepts,
              </p>
            </div>

            <div className="border-t border-[#e5e7eb] mt-[34px] pt-[20px] flex items-center gap-[28px] text-[18px] text-black">
              <span>◉</span>
              <span className="font-bold">in</span>
              <span className="font-bold">f</span>
              <span>✦</span>
            </div>
          </div>

         
          <div>
            <div className="flex items-center justify-between mb-[28px]">
              <div className="flex items-center gap-[40px] mx-auto lg:mx-0">
                <button className="relative text-[14px] font-bold text-[#17181d] pb-[10px]">
                  <span className="mr-[6px]">◉</span>
                  Collection
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-black rounded-full"></span>
                </button>

                <button className="text-[14px] font-bold text-[#bdbdbd] pb-[10px]">
                  <span className="mr-[6px]">◉</span>
                  Activity
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[24px]">
              {collection.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[20px] p-[8px] shadow-[0_14px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[180px] object-cover rounded-[16px]"
                    />

                    <div className="absolute top-[10px] right-[10px] bg-black/55 text-white text-[11px] px-[10px] py-[4px] rounded-full">
                      {item.time}
                    </div>
                  </div>

                  <div className="p-[10px]">
                    <h2 className="text-[18px] font-bold text-[#17181d] mb-[10px]">
                      {item.title}
                    </h2>

                    <p className="text-[12px] text-[#b1b1b8] mb-[6px]">
                      Current bid
                    </p>

                    <div className="flex items-center justify-between">
                      <h3 className="text-[18px] font-bold text-[#17181d] flex items-center gap-[4px]">
                        <span>♦</span>
                        {item.price}
                      </h3>

                      <button className="bg-black text-white px-[14px] py-[8px] rounded-[10px] text-[11px] font-bold hover:bg-[#222] transition">
                        PLACE BID
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-[40px]">
              <div className="w-[26px] h-[26px] rounded-full border-[4px] border-[#d4d4d8] border-t-transparent animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default User
