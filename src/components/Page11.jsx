import React from 'react'

const Page11 = ({img, name, about}) => {
  return (
    <div className='flex  flex-col justify-center items-center text-center gap-[10px] lg:w-[250px] md:w-[230px] w-[200px]'>
      <img src={img} alt={name} />
      <h1 className='lg:text-[20px] font-bold md:text-[18px] text-[16px]'>{name}</h1>
      <p className='lg:text-[20px] text-[#000000] md:text-[18px] text-[12px]'>{about}</p>
    </div>
  )
}

export default Page11
