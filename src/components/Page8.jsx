import React from 'react'

const Page8 = ({img,p1,p2,span}) => {
  return (
    <div className='flex md:flex-col lg:flex-row lg:gap-[160px]  flex-col justify-center items-center'>
      <img className='md:w-[345px] lg:w-[585px] w-[270px]' src={img} alt="" />
      <div className='md:text-center lg:w-[565px]'>
        <p className='lg:text-[20px] mb-[50px] text-[#000000] md:text-[24px] text-center lg:text-start'><span className='text-[#1178B2]'>{span}</span>{p1}</p>
        <p className='text-[#000000] lg:block hidden lg:text-[20px]'>{p2}</p>
      </div>
    </div>
  )
}

export default Page8
