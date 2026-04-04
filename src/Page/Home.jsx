import React, { useMemo, useReducer } from "react";
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
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";

const d1 = "/images/herro1.png";
const d2 = "/images/herro2.png";
const d3 = "/images/arrow.png";
const gls = "/images/gls.svg";
const d11 = "/images/d1.svg";
const d22 = "/images/d2.svg";

const initialState = {
  data: [
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
  ],

  topCollection: [
    {
      id: 1,
      img: d11,
      name: "Alex Ca.",
      author: "By Alex",
      volume: "8,456",
      percent: "+ 27.78%",
      floor: "3,5",
      owners: "2.2K",
      items: "500",
    },
    {
      id: 2,
      img: d22,
      name: "Alex Ca.",
      author: "By Alex",
      volume: "4,780",
      percent: "+ 27.78%",
      floor: "7,9",
      owners: "3.4K",
      items: "900",
    },
    {
      id: 3,
      img: d11,
      name: "Alex Ca.",
      author: "By Alex",
      volume: "8,456",
      percent: "+ 27.78%",
      floor: "3,5",
      owners: "2.2K",
      items: "500",
    },
    {
      id: 4,
      img: d22,
      name: "Alex Ca.",
      author: "By Alex",
      volume: "4,780",
      percent: "+ 27.78%",
      floor: "7,9",
      owners: "3.4K",
      items: "900",
    },
  ],

  editopen: false,
  editname: "",
  collection: "",
  idx: null,
  editimg: "",
  editprice: "",
  edittime: "",

  addopen: false,
  addname: "",
  addcollection: "",
  addprice: "",
  addtime: "",
  addimg: "",

  search: "",
  filter: "All",
};

function reducer(state, action) {
  if (action.key == "setSearch") {
    return { ...state, search: action.value };
  }

  if (action.key == "setFilter") {
    return { ...state, filter: action.value };
  }

  if (action.key == "setAddOpen") {
    return { ...state, addopen: action.value };
  }

  if (action.key == "setEditOpen") {
    return { ...state, editopen: action.value };
  }

  if (action.key == "setAddName") {
    return { ...state, addname: action.value };
  }

  if (action.key == "setAddCollection") {
    return { ...state, addcollection: action.value };
  }

  if (action.key == "setAddPrice") {
    return { ...state, addprice: action.value };
  }

  if (action.key == "setAddTime") {
    return { ...state, addtime: action.value };
  }

  if (action.key == "setAddImg") {
    return { ...state, addimg: action.value };
  }

  if (action.key == "add") {
    action.value.preventDefault();

    const newUser = {
      category: state.addname,
      collection: state.addcollection,
      price: state.addprice,
      time: state.addtime,
      img: state.addimg,
      id: Date.now().toString(),
    };

    return {
      ...state,
      data: [...state.data, newUser],
      addname: "",
      addcollection: "",
      addprice: "",
      addtime: "",
      addimg: "",
      addopen: false,
    };
  }

  if (action.key == "edit") {
    let e = action.value;
    return {
      ...state,
      editname: e.category,
      idx: e.id,
      collection: e.collection,
      editimg: e.img,
      editprice: e.price,
      edittime: e.time,
      editopen: true,
    };
  }

  if (action.key == "setEditName") {
    return { ...state, editname: action.value };
  }

  if (action.key == "setCollection") {
    return { ...state, collection: action.value };
  }

  if (action.key == "setEditImg") {
    return { ...state, editimg: action.value };
  }

  if (action.key == "setEditPrice") {
    return { ...state, editprice: action.value };
  }

  if (action.key == "setEditTime") {
    return { ...state, edittime: action.value };
  }

  if (action.key == "saveEdit") {
    action.value.preventDefault();

    let newData = state.data.map((e) => {
      if (e.id == state.idx) {
        return {
          ...e,
          category: state.editname,
          collection: state.collection,
          img: state.editimg,
          price: state.editprice,
          time: state.edittime,
        };
      }
      return e;
    });

    return {
      ...state,
      data: newData,
      editname: "",
      collection: "",
      idx: null,
      editimg: "",
      editprice: "",
      edittime: "",
      editopen: false,
    };
  }

  if (action.key == "delete") {
    let newData = state.data.filter((e) => e.id != action.value);
    return { ...state, data: newData };
  }

  return state;
}

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);

  const categories = useMemo(() => {
    const list = [...new Set(state.data.map((e) => e.category))];
    return ["All", ...list];
  }, [state.data]);

  const filteredData = useMemo(() => {
    return state.data.filter((e) => {
      const matchSearch =
        e.category.toLowerCase().includes(state.search.toLowerCase()) ||
        e.collection.toLowerCase().includes(state.search.toLowerCase());

      const matchFilter =
        state.filter === "All" ? true : e.category === state.filter;

      return matchSearch && matchFilter;
    });
  }, [state.data, state.search, state.filter]);

  return (
    <>
      <div className="w-full bg-[#f5f5f5] px-[16px] py-[30px] sm:px-[24px] md:px-[40px] lg:px-[60px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-[34px] leading-[110%] sm:text-[44px] md:text-[58px] lg:text-[72px] font-bold text-black max-w-[520px] mx-auto lg:mx-0">
                {t("discoverAnd")}
                <br />
                {t("createNfts")}
              </h1>

              <p className="text-[#7b7b7b] text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] mt-[20px] max-w-[520px] mx-auto lg:mx-0">
                {t("heroText")}{" "}
                <span className="font-bold text-black">{t("bonus")}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-[15px] mt-[30px] justify-center lg:justify-start">
                <button className="bg-black text-white rounded-[12px] px-[24px] py-[14px] text-[14px] font-semibold">
                  {t("exploreMore")}
                </button>

                <button className="border border-black text-black rounded-[12px] px-[24px] py-[14px] text-[14px] font-semibold">
                  {t("createNft")}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-[15px] sm:gap-[20px] mt-[40px] max-w-[450px] mx-auto lg:mx-0">
                <div>
                  <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-black">
                    430K+
                  </h1>
                  <p className="text-[12px] text-[#848586] mt-[5px]">
                    {t("artWorks")}
                  </p>
                </div>

                <div>
                  <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-black">
                    159K+
                  </h1>
                  <p className="text-[12px] text-[#848586] mt-[5px]">
                    {t("creators")}
                  </p>
                </div>

                <div>
                  <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-black">
                    87K+
                  </h1>
                  <p className="text-[12px] text-[#848586] mt-[5px]">
                    {t("collections")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end mt-[20px] lg:mt-0">
              <div className="relative w-full max-w-[520px] h-[320px] sm:h-[380px] md:h-[460px]">
                <div className="absolute top-[0px] left-[10px] sm:left-[20px] md:left-[40px] w-[150px] sm:w-[200px] md:w-[280px] rounded-[24px] overflow-hidden shadow-lg z-20">
                  <img src={d1} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-[100px] right-[0px] w-[140px] sm:w-[180px] md:w-[240px] rounded-[24px] overflow-hidden shadow-lg z-10">
                  <img src={d2} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-[50px] right-[80px] sm:right-[100px] md:right-[120px] hidden sm:block z-30">
                  <img src={d3} alt="" className="w-[60px] md:w-[90px]" />
                </div>

                <div className="absolute bottom-[20px] left-[50%] translate-x-[-50%] md:left-[120px] md:translate-x-0 bg-white rounded-[16px] shadow-xl px-[18px] py-[12px] z-40">
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

      <div className="w-full py-[60px] sm:py-[70px] md:py-[80px] px-[16px] sm:px-[24px] md:px-[40px] lg:px-[60px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative">
          <h1 className="text-center font-extrabold text-[26px] sm:text-[34px] md:text-[42px] text-[#1a1a1a] mb-[35px] md:mb-[50px]">
            {t("weeklyTopNft")}
          </h1>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 18 },
              768: { slidesPerView: 2.3, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 20 },
              1280: { slidesPerView: 4.2, spaceBetween: 20 },
              1400: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {state.data.map((e) => (
              <SwiperSlide key={e.id}>
                <div className="bg-white rounded-[24px] my-[20px] md:my-[40px] p-[10px] shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={e.img}
                      alt=""
                      className="w-full h-[200px] sm:h-[220px] object-cover rounded-[20px]"
                    />

                    <div className="absolute top-[10px] right-[10px] bg-black/60 text-white text-[12px] px-[10px] py-[4px] rounded-full backdrop-blur">
                      {e.time}
                    </div>
                  </div>

                  <div className="p-[10px]">
                    <h2 className="font-bold text-[18px] mb-[10px]">
                      {e.category}
                    </h2>

                    <div className="flex justify-between items-center mb-[15px]">
                      <span className="text-[12px] text-gray-400">
                        {e.collection}
                      </span>
                    </div>

                    <div className="flex justify-between items-center gap-[10px]">
                      <div>
                        <h3 className="font-bold flex gap-1 text-[16px] sm:text-[18px]">
                          <img src={gls} alt="" className="w-[18px]" />
                          {e.price}
                        </h3>
                      </div>

                      <button className="bg-black text-white px-[14px] sm:px-[16px] py-[8px] rounded-[12px] text-[11px] sm:text-[12px] font-bold hover:bg-gray-800 transition">
                        {t("placeBid")}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-[14px] sm:gap-[20px] mt-[20px] md:mt-[40px]">
            <button className="custom-prev w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] bg-white rounded-full shadow-lg border">
              ←
            </button>

            <button className="custom-next w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] bg-white rounded-full shadow-lg border">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-[16px] sm:px-[24px] md:px-[40px] lg:px-[60px] pb-[60px] md:pb-[80px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-center text-[26px] sm:text-[34px] md:text-[42px] font-extrabold text-[#1e1e1e] mb-[35px] md:mb-[50px]">
            {t("topCollection")}
          </h1>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[750px] md:min-w-[900px]">
              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center pb-[20px] text-[13px] md:text-[15px] text-[#9ca3af] font-medium">
                <p>{t("collection")}</p>
                <p>{t("volume")}</p>
                <p>{t("percent24")}</p>
                <p>{t("floorPrice")}</p>
                <p>{t("owners")}</p>
                <p>{t("items")}</p>
              </div>

              {state.topCollection.map((e) => (
                <div
                  key={e.id}
                  className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_1fr] items-center py-[18px] md:py-[22px] border-b border-[#e5e7eb]"
                >
                  <div className="flex items-center gap-[10px] md:gap-[14px]">
                    <img
                      src={e.img}
                      alt=""
                      className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full"
                    />
                    <div>
                      <h2 className="text-[14px] md:text-[16px] font-bold text-[#1f2937]">
                        {e.name}
                      </h2>
                      <p className="text-[12px] md:text-[14px] text-[#94a3b8]">
                        {e.author}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-[14px] md:text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                    <img src={gls} alt="" className="w-[12px] md:w-[14px]" />
                    {e.volume}
                  </h3>

                  <p className="text-[14px] md:text-[16px] font-bold text-[#22c55e]">
                    {e.percent}
                  </p>

                  <h3 className="text-[14px] md:text-[16px] font-bold text-[#1f2937] flex items-center gap-[6px]">
                    <img src={gls} alt="" className="w-[12px] md:w-[14px]" />
                    {e.floor}
                  </h3>

                  <p className="text-[14px] md:text-[16px] font-bold text-[#1f2937]">
                    {e.owners}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-bold text-[#1f2937]">
                    {e.items}
                  </p>
                </div>
              ))}

              <div className="flex justify-end pt-[24px]">
                <button className="text-[#94a3b8] font-medium text-[15px] hover:text-black transition">
                  {t("exploreAll")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[60px] md:py-[80px] px-[16px] sm:px-[24px] md:px-[40px] lg:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-center text-[26px] sm:text-[34px] md:text-[42px] font-extrabold text-[#1a1a1a] mb-[35px] md:mb-[50px]">
            {t("exploreMarketplace")}
          </h1>

          <div className="flex flex-col xl:flex-row justify-between items-center gap-[20px] mb-[40px]">
            <div className="flex flex-wrap justify-center xl:justify-start gap-[10px] sm:gap-[12px] w-full xl:w-auto">
              <button
                onClick={() => dispatch({ key: "setFilter", value: "All" })}
                className="px-[16px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium"
              >
                {t("all")}
              </button>

              <select
                value={state.filter}
                onChange={(a) =>
                  dispatch({ key: "setFilter", value: a.target.value })
                }
                className="px-[16px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium outline-none"
              >
                <option value="All">{t("all")}</option>
                {categories
                  .filter((e) => e !== "All")
                  .map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
              </select>

              <button className="px-[16px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium">
                {t("collection")}
              </button>

              <button className="px-[16px] py-[10px] border border-black rounded-[12px] text-[14px] font-medium">
                {t("price")}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-[12px] w-full xl:w-auto">
              <input
                type="text"
                placeholder={t("search")}
                value={state.search}
                onChange={(a) =>
                  dispatch({ key: "setSearch", value: a.target.value })
                }
                className="border border-gray-300 rounded-[12px] px-[16px] py-[10px] outline-none w-full sm:w-[250px]"
              />

              <button
                onClick={() => dispatch({ key: "setAddOpen", value: true })}
                className="bg-black text-white px-[20px] py-[10px] rounded-[12px] font-semibold"
              >
                {t("add")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] md:gap-[25px]">
            {filteredData.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-[24px] p-[12px] shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <img
                  src={e.img}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-[18px]"
                />

                <div className="pt-[16px]">
                  <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1a1a] mb-[18px] break-words">
                    {e.category} <br />
                    {e.collection}
                  </h2>

                  <div className="flex flex-wrap gap-[10px]">
                    <button
                      onClick={() => dispatch({ key: "edit", value: e })}
                      className="bg-black text-white px-[18px] py-[9px] rounded-[12px] text-[13px] font-semibold hover:bg-[#2b2b2b] transition"
                    >
                      {t("edit")}
                    </button>

                    <button
                      onClick={() => dispatch({ key: "delete", value: e.id })}
                      className="bg-red-500 text-white px-[18px] py-[9px] rounded-[12px] text-[13px] font-semibold hover:bg-red-600 transition"
                    >
                      {t("delete")}
                    </button>

                    <button
                      onClick={() => navigate(`/info/${e.id}`)}
                      className="bg-[#f3f4f6] text-black px-[18px] py-[9px] rounded-[12px] text-[13px] font-semibold hover:bg-[#e5e7eb] transition"
                    >
                      {t("info")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-[30px] md:pt-[40px]">
            <button className="text-[#94a3b8] font-medium text-[15px] hover:text-black transition">
              {t("exploreAll")}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f5f5f5] py-[50px] px-[16px] sm:px-[24px] md:px-[40px] lg:px-[70px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-[40px] sm:mb-[50px] md:mb-[60px]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#1e1e1e]">
              {t("frequentlyAsked")}
            </h1>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#bdbdbd] mt-[5px]">
              {t("questions")}
            </h2>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center border-b pb-[15px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#2d2d2d]">
                {t("faq1")}
              </p>
              <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] bg-black text-white rounded-full flex items-center justify-center text-[18px]">
                +
              </div>
            </div>

            <div className="flex justify-between items-center border-b pb-[15px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#2d2d2d]">
                {t("faq2")}
              </p>
              <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] bg-black text-white rounded-full flex items-center justify-center text-[18px]">
                +
              </div>
            </div>

            <div className="flex justify-between items-center border-b pb-[15px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#2d2d2d]">
                {t("faq3")}
              </p>
              <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] bg-black text-white rounded-full flex items-center justify-center text-[18px]">
                +
              </div>
            </div>

            <div className="flex justify-between items-center border-b pb-[15px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#2d2d2d]">
                {t("faq4")}
              </p>
              <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] bg-black text-white rounded-full flex items-center justify-center text-[18px]">
                +
              </div>
            </div>

            <div className="flex justify-between items-center border-b pb-[15px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#2d2d2d]">
                {t("faq5")}
              </p>
              <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] bg-black text-white rounded-full flex items-center justify-center text-[18px]">
                +
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={state.editopen}
        onClose={() => dispatch({ key: "setEditOpen", value: false })}
      >
        <form onSubmit={(a) => dispatch({ key: "saveEdit", value: a })}>
          <DialogTitle>{t("dialogEdit")}</DialogTitle>

          <DialogContent className="pt-[10px] min-w-[300px] sm:min-w-[350px]">
            <TextField
              fullWidth
              label={t("name")}
              value={state.editname}
              onChange={(a) =>
                dispatch({ key: "setEditName", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("collectionField")}
              value={state.collection}
              onChange={(a) =>
                dispatch({ key: "setCollection", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("priceField")}
              value={state.editprice}
              onChange={(a) =>
                dispatch({ key: "setEditPrice", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("time")}
              value={state.edittime}
              onChange={(a) =>
                dispatch({ key: "setEditTime", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("imageUrl")}
              value={state.editimg}
              onChange={(a) =>
                dispatch({ key: "setEditImg", value: a.target.value })
              }
              margin="normal"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => dispatch({ key: "setEditOpen", value: false })}>
              {t("cancel")}
            </Button>
            <Button type="submit" variant="contained">
              {t("save")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        open={state.addopen}
        onClose={() => dispatch({ key: "setAddOpen", value: false })}
      >
        <form onSubmit={(a) => dispatch({ key: "add", value: a })}>
          <DialogTitle>{t("dialogAdd")}</DialogTitle>

          <DialogContent className="pt-[10px] min-w-[300px] sm:min-w-[350px]">
            <TextField
              fullWidth
              label={t("name")}
              value={state.addname}
              onChange={(a) =>
                dispatch({ key: "setAddName", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("collectionField")}
              value={state.addcollection}
              onChange={(a) =>
                dispatch({ key: "setAddCollection", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("priceField")}
              value={state.addprice}
              onChange={(a) =>
                dispatch({ key: "setAddPrice", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("time")}
              value={state.addtime}
              onChange={(a) =>
                dispatch({ key: "setAddTime", value: a.target.value })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label={t("imageUrl")}
              value={state.addimg}
              onChange={(a) =>
                dispatch({ key: "setAddImg", value: a.target.value })
              }
              margin="normal"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => dispatch({ key: "setAddOpen", value: false })}>
              {t("cancel")}
            </Button>
            <Button type="submit" variant="contained">
              {t("save")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default Home;