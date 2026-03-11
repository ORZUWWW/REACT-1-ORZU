import React from 'react'

const Bg4 = ({h1,p,children}) => {
  return (
    <div className='bg4 flex flex-col gap-[20px] justify-center items-center my-[40px]'>
<h1 className='lg:text-[40px] text-[white] lg:w-[1020px] md:w-[640px] text-center md:text-[32px] w-[317px] text-[24px] font-bold '>{h1}</h1>
<p className='lg:text-[20px] text-[white] lg:w-[760px] md:w-[600px] text-center md:text-[16px] my-[15px]  w-[310px] text-[12px] font-bold '>{p}</p>
{children}

    </div>
  )
}

export default Bg4
