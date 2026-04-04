import axios from "axios";
import React, { useEffect, useState } from "react";
import d1 from "../images/herro1.png";
import d2 from "../images/herro2.png";
import d3 from "../images/arrow.png";
import gls from "../images/gls.svg";
import d11 from "../images/d1.svg";
import d22 from "../images/d2.svg";
import s2 from "../images/s2.png"
import s3 from "../images/s1.png"
import s1 from "../images/s1.png"
import s4 from "../images/s4.png"
import s5 from "../images/s5.png"



import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

let url = "http://localhost:3000/users";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editopen, seteditpen] = useState(false);
  const [editname, seteditname] = useState("");
  const [collection, setcollection] = useState("");
  const [idx, setidx] = useState(null);
  const [editimg, setimg] = useState(null);
  const [editprice, setprice] = useState(null);
  const [edittime, settime] = useState(null);
  const [addname, setaddname] = useState("");
  const [addcollection, setaddcollection] = useState("");
  const [addprice, setaddprice] = useState("");
  const [addtime, setaddtime] = useState("");
  const [addimg, setaddimg] = useState("");
const [addopen, setaddopen] = useState(false);



  async function get() {
    try {
      let { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);



async function addUser(e) {
  e.preventDefault();
  try {
    await axios.post(url, {
      category: addname,
      collection: addcollection,
      price: addprice,
      time: addtime,
      img: addimg,
    });

    get();
    setaddopen(false);

    setaddname("");
    setaddcollection("");
    setaddprice("");
    setaddtime("");
    setaddimg("");
  } catch (error) {
    console.error(error);
  }
}





  async function editform(e) {
    e.preventDefault();
    try {
      await axios.put(`${url}/${idx}`, {
        category: editname,
        collection: collection,
        img:editimg,
      price:editprice,
      id:idx,
      time:edittime,
      });
   

seteditname("")
setcollection("")
setidx(null)
setimg("")
setprice("")
settime("")
seteditpen(false);

      get();
    } catch (error) {
      console.error(error);
    }
  }

  function edit(e) {
    seteditname(e.category);
    setidx(e.id);
    setcollection(e.collection);
    setimg(e.img)
    setprice(e.price)
    settime(e.time)
    seteditpen(true);
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${url}/${id}`);
      get()
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <div className="w-full bg-[#f5f5f5] px-[20px] py-[30px] md:px-[40px] lg:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
            <div className="w-full">
              <h1 className="text-[42px] leading-[100%] md:text-[58px] lg:text-[72px] font-bold text-black max-w-[520px]">
                Discover And
                <br />
                Create NFTs
              </h1>

              <p className="text-[#7b7b7b] text-[14px] md:text-[16px] leading-[28px] mt-[20px] max-w-[520px]">
                Discover, Create and Sell NFTs On Our NFT Marketplace
                With Over Thousands Of NFTs And Get a{" "}
                <span className="font-bold text-black">$20 bonus.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-[15px] mt-[30px]">
                <button className="bg-black text-white rounded-[12px] px-[24px] py-[14px] text-[14px] font-semibold">
                  EXPLORE MORE
                </button>

                <button className="border border-black text-black rounded-[12px] px-[24px] py-[14px] text-[14px] font-semibold">
                  CREATE NFT
                </button>
              </div>

              <div className="grid grid-cols-3 gap-[20px] mt-[40px] max-w-[450px]">
                <div>
                  <h1 className="text-[28px] md:text-[34px] font-bold text-black">
                    430K+
                  </h1>
                  <p className="text-[12px] text-[#848586] mt-[5px]">
                    Art Works
                  </p>
                </div>

                <div>
                  <h1 className="text-[28px] md:text-[34px] font-bold text-black">
                    159K+
                  </h1>
                  <p className="text-[12px] text-[#848586] mt-[5px]">
                    Creators
                  </p>
                </div>

                <div>
                  <h1 className="text-[28px] md:text-[34px] font-bold text-black">
                    87K+
                  </h1>
                  <p className="text-[12px] text-[#848586] mt-[5px]">
                    Collections
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] h-[420px] md:h-[500px]">
                <div className="absolute top-[0px] left-[20px] md:left-[40px] w-[220px] md:w-[280px] rounded-[24px] overflow-hidden shadow-lg z-20">
                  <img
                    src={d1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-[140px] right-[0px] w-[190px] md:w-[240px] rounded-[24px] overflow-hidden shadow-lg z-10">
                  <img
                    src={d2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-[15px] right-[10px] hidden md:block">
                  <div className="grid grid-cols-6 gap-[6px]">
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>

                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>

                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>

                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-[#bdbdbd] rounded-full"></span>
                  </div>
                </div>

                <div className="absolute top-[70px] right-[120px] hidden md:block z-30">
                  <img src={d3} alt="" className="w-[90px]" />
                </div>

                <div className="absolute bottom-[30px] left-[80px] md:left-[120px] bg-white rounded-[16px] shadow-xl px-[22px] py-[14px] z-40">
                  <div className="flex items-center gap-[18px] text-[18px] font-bold">
                    <span>←</span>
                    <span className="text-[#d8d8d8]">|</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[80px] px-[20px] md:px-[40px] lg:px-[60px]">
        <div className="max-w-[1400px] mx-auto relative">
          <h1 className="text-center font-extrabold text-[28px] md:text-[42px] text-[#1a1a1a] mb-[50px]">
            Weekly - Top NFT
          </h1>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.2 },
              900: { slidesPerView: 3.2 },
              1200: { slidesPerView: 4.2 },
              1400: { slidesPerView: 5 },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-[24px] my-[40px] p-[10px] shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[220px] object-cover rounded-[20px]"
                    />

                    <div className="absolute top-[10px] right-[10px] bg-black/60 text-white text-[12px] px-[10px] py-[4px] rounded-full backdrop-blur">
                      {item.time}
                    </div>
                  </div>

                  <div className="p-[10px]">
                    <h2 className="font-bold text-[18px] mb-[10px]">
                      {item.category}
                    </h2>

                    <div className="flex justify-between items-center mb-[15px]">
                      <span className="text-[12px] text-gray-400">
                        {item.collection}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold flex gap-1 text-[18px]">
                          <img src={gls} alt="" />
                          {item.price}
                        </h3>
                      </div>

                      <button className="bg-black text-white px-[16px] py-[8px] rounded-[12px] text-[12px] font-bold hover:bg-gray-800 transition">
                        PLACE BID
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-[20px] mt-[40px]">
            <button className="custom-prev w-[50px] h-[50px] bg-white rounded-full shadow-lg border">
              ←
            </button>

            <button className="custom-next w-[50px] h-[50px] bg-white rounded-full shadow-lg border">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white lg:ml-[1170px] relative top-[-170px] z-[4] rounded-[20px] shadow-xl p-[20px] w-[280px]">
        <div className="flex justify-between items-center mb-[20px]">
          <h2 className="font-bold text-[16px] text-gray-800">
            Recent Viewed
          </h2>
          <span className="text-gray-400 text-[20px]">•••</span>
        </div>

        <div className="flex justify-between items-center mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <img className="w-[45px] h-[45px] rounded-full" src={d11} alt="" />
            <div>
              <h3 className="font-semibold text-[14px] text-gray-800">
                Alex Ca.
              </h3>
              <p className="text-[12px] text-gray-400">Alexy</p>
            </div>
          </div>

          <div className="text-right">
            <h3 className="font-bold text-[14px] text-gray-800">Ξ 8,456</h3>
            <p className="text-[12px] font-semibold text-green-500">
              +23.00%
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <img className="w-[40px] h-[40px] rounded-full" src={d22} alt="" />
            <div>
              <h3 className="font-semibold text-[14px] text-gray-800">
                Juliya S.
              </h3>
              <p className="text-[12px] text-gray-400">JuliyaS</p>
            </div>
          </div>

          <div className="text-right">
            <h3 className="font-bold text-[14px] text-gray-800">Ξ 5,327</h3>
            <p className="text-[12px] font-semibold text-red-500">-32.01%</p>
          </div>
        </div>
      </div>

      <div className="w-full px-[20px] md:px-[40px] lg:px-[60px] pb-[80px]">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-center text-[28px] md:text-[42px] font-extrabold text-[#1e1e1e] mb-[50px]">
            Top Collection
          </h1>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center pb-[20px] text-[15px] text-[#9ca3af] font-medium">
                <p>Collection</p>
                <p>Volume</p>
                <p>24h %</p>
                <p>Floor Price</p>
                <p>Owners</p>
                <p>Items</p>
              </div>

              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center py-[22px] border-b border-[#e5e7eb]">
                <div className="flex items-center gap-[14px]">
                  <img src={d11} alt="" className="w-[52px] h-[52px] rounded-full" />
                  <div>
                    <h2 className="text-[16px] font-bold text-[#1f2937]">
                      Alex Ca.
                    </h2>
                    <p className="text-[14px] text-[#94a3b8]">By Alex</p>
                  </div>
                </div>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  8,456
                </h3>

                <p className="text-[16px] font-bold text-[#22c55e]">+ 27.78%</p>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  3,5
                </h3>

                <p className="text-[16px] font-bold text-[#1f2937]">2.2K</p>
                <p className="text-[16px] font-bold text-[#1f2937]">500</p>
              </div>

              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center py-[22px] border-b border-[#e5e7eb]">
                <div className="flex items-center gap-[14px]">
                  <img src={d22} alt="" className="w-[52px] h-[52px] rounded-full" />
                  <div>
                    <h2 className="text-[16px] font-bold text-[#1f2937]">
                      Alex Ca.
                    </h2>
                    <p className="text-[14px] text-[#94a3b8]">By Alex</p>
                  </div>
                </div>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  4,780
                </h3>

                <p className="text-[16px] font-bold text-[#22c55e]">+ 27.78%</p>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  7,9
                </h3>

                <p className="text-[16px] font-bold text-[#1f2937]">3.4K</p>
                <p className="text-[16px] font-bold text-[#1f2937]">900</p>
              </div>

              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center py-[22px] border-b border-[#e5e7eb]">
                <div className="flex items-center gap-[14px]">
                  <img src={d11} alt="" className="w-[52px] h-[52px] rounded-full" />
                  <div>
                    <h2 className="text-[16px] font-bold text-[#1f2937]">
                      Alex Ca.
                    </h2>
                    <p className="text-[14px] text-[#94a3b8]">By Alex</p>
                  </div>
                </div>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  8,456
                </h3>

                <p className="text-[16px] font-bold text-[#22c55e]">+ 27.78%</p>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  3,5
                </h3>

                <p className="text-[16px] font-bold text-[#1f2937]">2.2K</p>
                <p className="text-[16px] font-bold text-[#1f2937]">500</p>
              </div>

              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center py-[22px] border-b border-[#e5e7eb]">
                <div className="flex items-center gap-[14px]">
                  <img src={d22} alt="" className="w-[52px] h-[52px] rounded-full" />
                  <div>
                    <h2 className="text-[16px] font-bold text-[#1f2937]">
                      Alex Ca.
                    </h2>
                    <p className="text-[14px] text-[#94a3b8]">By Alex</p>
                  </div>
                </div>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  4,780
                </h3>

                <p className="text-[16px] font-bold text-[#22c55e]">+ 27.78%</p>

                <h3 className="text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                  <img src={gls} alt="" className="w-[14px]" />
                  7,9
                </h3>

                <p className="text-[16px] font-bold text-[#1f2937]">3.4K</p>
                <p className="text-[16px] font-bold text-[#1f2937]">900</p>
              </div>

              <div className="flex justify-end pt-[24px]">
                <button className="text-[#94a3b8] font-medium text-[15px] hover:text-black transition">
                  Explore All →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full py-[80px] px-[20px] md:px-[40px] lg:px-[60px]">
  <div className="max-w-[1400px] mx-auto">
    <h1 className="text-center text-[28px] md:text-[42px] font-extrabold text-[#1a1a1a] mb-[50px]">
      Explore Marketplace
    </h1>

    <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] mb-[40px]">
      <div className="flex flex-wrap justify-center gap-[12px]">
        <button
          // onClick={() => setfilter("All")}
          className="px-[18px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium"
        >
          All
        </button>

        <select
          // value={filter}
          // onChange={(e) => setfilter(e.target.value)}
          className="px-[18px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium outline-none"
        >
          <option value="All">Category</option>
          <option value="Current bid">Current bid</option>
        </select>

        <button className="px-[18px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium">
          Collection
        </button>

        <button className="px-[18px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium">
          Price
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-[12px] w-full lg:w-auto">
        <input
          type="text"
          placeholder="Search..."
          // value={search}
          // onChange={(e) => setsearch(e.target.value)}
          className="border border-gray-300 rounded-[12px] px-[16px] py-[10px] outline-none w-full sm:w-[250px]"
        />

        <button
          onClick={() => setaddopen(true)}
          className="bg-black text-white px-[20px] py-[10px] rounded-[12px] font-semibold"
        >
          Add +
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-[24px] p-[12px] shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >
          <img
            src={item.img}
            alt=""
            className="w-full h-[220px] object-cover rounded-[18px]"
          />

          <div className="pt-[16px]">
            <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-[18px]">
              {item.category} <br />
              {item.collection}
            </h2>

            <div className="flex flex-wrap gap-[10px]">
              <button
                onClick={() => edit(item)}
                className="bg-black text-white px-[18px] py-[9px] rounded-[12px] text-[13px] font-semibold hover:bg-[#2b2b2b] transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteUser(item.id)}
                className="bg-red-500 text-white px-[18px] py-[9px] rounded-[12px] text-[13px] font-semibold hover:bg-red-600 transition"
              >
                Delete
              </button>

              <button
                onClick={() => navigate(`/info/${item.id}`)}
                className="bg-[#f3f4f6] text-black px-[18px] py-[9px] rounded-[12px] text-[13px] font-semibold hover:bg-[#e5e7eb] transition"
              >
                Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-end pt-[40px]">
      <button className="text-[#94a3b8] font-medium text-[15px] hover:text-black transition">
        Explore All →
      </button>
    </div>
  </div>
</div>


<div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-[80px]">
  <div className="max-w-[1400px] mx-auto border-t border-[#d9d9d9] pt-[70px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
      
      <div>
        <h2 className="text-[38px] md:text-[54px] leading-[100%] font-extrabold text-[#cfcfcf]">
          Just Unleash -
        </h2>
        <h1 className="text-[40px] md:text-[58px] leading-[110%] font-extrabold text-[#17181d] mt-[8px] max-w-[650px]">
          Your Inner Collector
        </h1>

        <div className="mt-[35px] flex flex-col gap-[18px]">
          <div className="flex items-center gap-[12px] text-[18px] text-[#6b6e76] font-medium">
            <span className="w-[22px] h-[22px] rounded-full bg-[#17181d] text-white flex items-center justify-center text-[12px]">✓</span>
            Best Seller All Around World
          </div>

          <div className="flex items-center gap-[12px] text-[18px] text-[#6b6e76] font-medium">
            <span className="w-[22px] h-[22px] rounded-full bg-[#17181d] text-white flex items-center justify-center text-[12px]">✓</span>
            $2M+ Transactions Every Day
          </div>

          <div className="flex items-center gap-[12px] text-[18px] text-[#6b6e76] font-medium">
            <span className="w-[22px] h-[22px] rounded-full bg-[#17181d] text-white flex items-center justify-center text-[12px]">✓</span>
            Secure Transactions
          </div>

          <div className="flex items-center gap-[12px] text-[18px] text-[#6b6e76] font-medium">
            <span className="w-[22px] h-[22px] rounded-full bg-[#17181d] text-white flex items-center justify-center text-[12px]">✓</span>
            Exclusive Collections From Sellers
          </div>

          <div className="flex items-center gap-[12px] text-[18px] text-[#6b6e76] font-medium">
            <span className="w-[22px] h-[22px] rounded-full bg-[#17181d] text-white flex items-center justify-center text-[12px]">✓</span>
            Easy Buying and Selling
          </div>

          <div className="flex items-center gap-[12px] text-[18px] text-[#6b6e76] font-medium">
            <span className="w-[22px] h-[22px] rounded-full bg-[#17181d] text-white flex items-center justify-center text-[12px]">✓</span>
            Join Our Community
          </div>
        </div>

        <button className="mt-[45px] bg-black text-white px-[28px] py-[16px] rounded-[16px] text-[16px] font-semibold flex items-center gap-[12px] hover:bg-[#222] transition">
          Explore More
          <span className="text-[18px]">→</span>
        </button>
      </div>

      <div className="relative h-[700px] hidden lg:block">
        
        <div className="absolute right-[120px] top-[70px] bg-white rounded-[22px] shadow-xl w-[330px] p-[18px] z-20">
          <h2 className="text-[28px] font-bold text-[#17181d] mb-[20px]">
            Best Sellers
          </h2>

          <div className="flex items-center justify-between mb-[18px]">
            <div className="flex items-center gap-[12px]">
              <div className="relative">
                <img src={d11} alt="" className="w-[58px] h-[58px] rounded-full" />
                <span className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] rounded-full bg-[#17181d] text-white text-[10px] flex items-center justify-center font-bold">1</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#17181d]">Alex Ca.</h3>
                <p className="text-[12px] text-[#9ca3af]">@alexy</p>
              </div>
            </div>
            <button className="border border-[#d9d9d9] px-[16px] py-[7px] rounded-[10px] text-[13px] font-semibold text-[#17181d]">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between mb-[18px]">
            <div className="flex items-center gap-[12px]">
              <div className="relative">
                <img src={d22} alt="" className="w-[58px] h-[58px] rounded-full" />
                <span className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] rounded-full bg-[#17181d] text-white text-[10px] flex items-center justify-center font-bold">2</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#17181d]">Juliya Sa.</h3>
                <p className="text-[12px] text-[#9ca3af]">@JuliyaS</p>
              </div>
            </div>
            <button className="border border-[#d9d9d9] px-[16px] py-[7px] rounded-[10px] text-[13px] font-semibold text-[#17181d]">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between mb-[18px]">
            <div className="flex items-center gap-[12px]">
              <div className="relative">
                <img src={s2} alt="" className="w-[58px] h-[58px] rounded-full object-cover" />
                <span className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] rounded-full bg-[#17181d] text-white text-[10px] flex items-center justify-center font-bold">2</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#17181d]">Juliya Sa.</h3>
                <p className="text-[12px] text-[#9ca3af]">@JuliyaS</p>
              </div>
            </div>
            <button className="border border-[#d9d9d9] px-[16px] py-[7px] rounded-[10px] text-[13px] font-semibold text-[#17181d]">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between mb-[18px]">
            <div className="flex items-center gap-[12px]">
              <div className="relative">
                <img src={s3} alt="" className="w-[58px] h-[58px] rounded-full object-cover" />
                <span className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] rounded-full bg-[#17181d] text-white text-[10px] flex items-center justify-center font-bold">3</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#17181d]">Trevor Pu.</h3>
                <p className="text-[12px] text-[#9ca3af]">@TrevorP</p>
              </div>
            </div>
            <button className="bg-[#ededed] px-[16px] py-[7px] rounded-[10px] text-[13px] font-semibold text-[#17181d]">
              Unfollow
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="relative">
                <img src={s4} alt="" className="w-[58px] h-[58px] rounded-full object-cover" />
                <span className="absolute -top-[4px] -right-[4px] w-[20px] h-[20px] rounded-full bg-[#17181d] text-white text-[10px] flex items-center justify-center font-bold">4</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#17181d]">Romi Ka.</h3>
                <p className="text-[12px] text-[#9ca3af]">@RomiK</p>
              </div>
            </div>
            <button className="border border-[#d9d9d9] px-[16px] py-[7px] rounded-[10px] text-[13px] font-semibold text-[#17181d]">
              Follow
            </button>
          </div>
        </div>

        <div className="absolute right-[0px] top-[30px] bg-white rounded-[18px] shadow-lg px-[16px] py-[14px] w-[330px] z-30 flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <div className="w-[8px] h-[8px] bg-[#17181d] rounded-full"></div>
            <div className="relative">
              <img src={s2} alt="" className="w-[52px] h-[52px] rounded-[14px] object-cover" />
              <span className="absolute -top-[6px] -right-[6px] w-[18px] h-[18px] rounded-full bg-[#4ade80] text-white text-[10px] flex items-center justify-center">✓</span>
            </div>
            <div>
              <h3 className="text-[15px] font-medium text-[#7b7b7b]">
                New bid <span className="font-bold text-[#17181d]">Rotation</span>
              </h3>
              <p className="text-[15px] font-bold text-[#17181d]">0.002 ETH</p>
              <p className="text-[11px] text-[#b0b0b0] mt-[2px]">6 Oct 2022, 11:44 PM</p>
            </div>
          </div>
          <img src={s2} alt="" className="w-[58px] h-[58px] rounded-[14px] object-cover" />
        </div>

        <div className="absolute left-[10px] bottom-[70px] bg-white rounded-[22px] shadow-xl p-[20px] w-[320px] z-30">
          <div className="flex justify-between items-center mb-[20px]">
            <h2 className="font-bold text-[16px] text-gray-800">Recent Viewed</h2>
            <span className="text-gray-400 text-[20px]">•••</span>
          </div>

          <div className="flex justify-between items-center mb-[18px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[45px] h-[45px] rounded-full" src={d11} alt="" />
              <div>
                <h3 className="font-semibold text-[14px] text-gray-800">Alex Ca.</h3>
                <p className="text-[12px] text-gray-400">Alexy</p>
              </div>
            </div>

            <div className="text-right">
              <h3 className="font-bold text-[14px] text-gray-800">♦ 8,456</h3>
              <p className="text-[12px] font-semibold text-green-500">+23,00%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <img className="w-[45px] h-[45px] rounded-full" src={d22} alt="" />
              <div>
                <h3 className="font-semibold text-[14px] text-gray-800">Juliya S.</h3>
                <p className="text-[12px] text-gray-400">JuliyaS</p>
              </div>
            </div>

            <div className="text-right">
              <h3 className="font-bold text-[14px] text-gray-800">♦ 5,327</h3>
              <p className="text-[12px] font-semibold text-red-500">-32,01%</p>
            </div>
          </div>
        </div>

        <div className="absolute right-[10px] bottom-[30px] grid grid-cols-10 gap-[10px] opacity-70">
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>

          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>

          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>

          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
          <span className="w-[3px] h-[3px] bg-[#cfcfcf] rounded-full"></span>
        </div>
      </div>

    </div>
  </div>
</div>






<div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-[100px]">
  <div className="max-w-[1400px] mx-auto flex justify-center">
    <div className="relative w-[700px] h-[700px] flex items-center justify-center">
      
      <div className="absolute w-[620px] h-[620px] rounded-full border border-[#d3d3d3]"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full border border-[#d3d3d3]"></div>

      <div className="text-center z-10 max-w-[380px]">
        <h1 className="text-[52px] leading-[100%] font-extrabold text-[#17181d]">
          Join The
        </h1>
        <h2 className="text-[52px] leading-[100%] font-extrabold text-[#cfcfcf]">
          Community
        </h2>

        <p className="text-[15px] leading-[28px] text-[#7b7b7b] mt-[25px]">
          Our vibrant community is full of collectors, artists, and enthusiasts
          who share a passion for one-of-a-kind digital.
        </p>

        <button className="mt-[30px] bg-black text-white px-[28px] py-[14px] rounded-[12px] text-[14px] font-semibold hover:bg-[#222] transition">
          Join Our Community
        </button>
      </div>

      <img
        src={s3}
        alt=""
        className="absolute top-[35px] left-[170px] w-[46px] h-[46px] rounded-full object-cover"
      />

      <img
        src={d22}
        alt=""
        className="absolute top-[190px] left-[120px] w-[38px] h-[38px] rounded-full object-cover"
      />

      <img
        src={s2}
        alt=""
        className="absolute top-[40px] right-[245px] w-[40px] h-[40px] rounded-full object-cover"
      />

      <img
        src={s3}
        alt=""
        className="absolute top-[55px] right-[140px] w-[36px] h-[36px] rounded-full object-cover"
      />

      <img
        src={d11}
        alt=""
        className="absolute top-[310px] right-[105px] w-[50px] h-[50px] rounded-full object-cover"
      />

      <img
        src={s4}
        alt=""
        className="absolute bottom-[125px] right-[135px] w-[52px] h-[52px] rounded-full object-cover"
      />

      <img
        src={s1}
        alt=""
        className="absolute bottom-[118px] right-[220px] w-[36px] h-[36px] rounded-full object-cover"
      />

      <img
        src={d11}
        alt=""
        className="absolute bottom-[28px] left-[340px] w-[42px] h-[42px] rounded-full object-cover"
      />

      <img
        src={s5}
        alt=""
        className="absolute bottom-[145px] left-[88px] w-[40px] h-[40px] rounded-full object-cover"
      />
    </div>
  </div>
</div>

















      <Dialog open={editopen} onClose={() => seteditpen(false)}>
        <form onSubmit={editform}>
          <DialogTitle>Edit</DialogTitle>

          <DialogContent className="pt-[10px] min-w-[350px]">
            <TextField
              fullWidth
              label="Name"
              value={editname}
              onChange={(e) => seteditname(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Collection"
              value={collection}
              onChange={(e) => setcollection(e.target.value)}
              margin="normal"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => seteditpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>

<Dialog open={addopen} onClose={() => setaddopen(false)}>
  <form onSubmit={addUser}>
    <DialogTitle>Add NFT</DialogTitle>

    <DialogContent className="pt-[10px] min-w-[350px]">
      <TextField
        fullWidth
        label="Name"
        value={addname}
        onChange={(e) => setaddname(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Collection"
        value={addcollection}
        onChange={(e) => setaddcollection(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Price"
        value={addprice}
        onChange={(e) => setaddprice(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Time"
        value={addtime}
        onChange={(e) => setaddtime(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Image URL"
        value={addimg}
        onChange={(e) => setaddimg(e.target.value)}
        margin="normal"
      />
    </DialogContent>

    <DialogActions>
      <Button onClick={() => setaddopen(false)}>Cancel</Button>
      <Button type="submit" variant="contained">
        Save
      </Button>
    </DialogActions>
  </form>
</Dialog>



    </>
  );
}

export default Home;