import React from 'react'

const Page13 = ({img,h1,p,data}) => {
  return (
    <div className='lg:w-[392px] rounded-[10px] md:w-[230px] shadow-2xl shadow-[#00000017] flex-col flex lg:flex-col md:flex-col w-[330px]'>
      <img src={img} alt="" />
      <div className='p-[20px]'>
        <h2 className='text-[#000000] lg:text-[20px] md:text-[16px] text-[12px]'>{h1}</h2>
        <p className='text-[10px] my-[10px] md:text-[14px] lg:text-[18px]'>{p}</p>

        <p className='text-[10px] md:text-[12px]  mt-[10px]'>{data}</p>
      </div>
    </div>
  )
}

export default Page13
