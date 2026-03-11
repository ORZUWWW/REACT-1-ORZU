import React from 'react'

const Page9 = ({img,name,p,h2,h3}) => {
  return (
    <div className='p-[20px] lg:gap-[100px] w-[80%] m-auto gap-[20px] shadow-2xl my-[30px] shadow-[#00000017] rounded-[10px] flex lg:gap-[50px] justify-center items-center md:flex-col-reverse flex-col-reverse lg:flex-row   '>
      <img src={img} alt="" />

      <div className='lg:w-[608px] md:w-[580px] w-[265px] text-center md:text-center lg:text-start  '>
        <h1 className='text-[#000000] text-[18px]'>{name}</h1>
         <p className='text-[#000000] text-[18px]'>{p}</p>
        <h2 className='text-[#000000] text-[18px] lg:mt-[100px]'>{h2}</h2>
        <h3 className='text-[#000000] text-[18px]'>{h3}</h3>
      </div>
    </div>
  )
}

export default Page9
