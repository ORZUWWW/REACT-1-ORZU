import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../style.css'


import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Home = () => {
  let inputref=useRef(null)
  let [deletebtn,setdeletebtn]=useState("block")
const card = [
  {
    level: "JUNIOR",
    price: "250$",
    img: "https://cdn-icons-png.flaticon.com/128/2721/2721265.png",
  },
  {
    level: "MIDDLE",
    price: "600$",
    img: "https://cdn-icons-png.flaticon.com/128/2721/2721297.png",
  },
  {
    level: "SENIOR",
    price: "1500$",
    img: "https://cdn-icons-png.flaticon.com/128/2721/2721287.png",
  },
  {
    level: "TEAM LEAD",
    price: "2500$",
    img: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png",
  },
  {
    level: "ARCHITECT",
    price: "3500$",
    img: "https://cdn-icons-png.flaticon.com/128/1995/1995574.png",
  },
  {
    level: "CTO",
    price: "5000$",
    img: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
  },
];




  return (
    <div className='  items-center gap-[40px]'>
      <button className='w-[100px] rounded-2xl p-[10px] bg-[gray] border-2' onClick={()=>inputref.current.focus()}>Focus</button>

      <button className='w-[100px] rounded-2xl p-[10px] bg-[gray] border-2' onClick={()=>setdeletebtn("none")}>delete</button>

      <button className='w-[100px] rounded-2xl p-[10px] bg-[gray] border-2' onClick={()=>inputref.current.type="checkbox"}>Type</button>

<input ref={inputref}  style={{display:deletebtn}} type="text" placeholder='Name...' className='border-2 rounded-2xl p-[10px] mt-[20px] ml-[20px]' />     



<div className=''>

 <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay:600,
          disableOnInteraction:false,
        }}
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

    {
  card.map((e)=>{
    return <SwiperSlide>
    <div>
          <img  src={e.img} />
          <h1>{e.level}</h1>
          <p>{e.price}</p>
    </div>
        </SwiperSlide>
    
  })
}

        
      </Swiper>




























</div>




    </div>
  )
}

export default Home
