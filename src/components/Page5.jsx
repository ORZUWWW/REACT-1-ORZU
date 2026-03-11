import React from 'react'

const Page5 = ({h1,img}) => {
  return (
    <div className='lg:w-[392px] w-[320px] flex lg:block  items-center text-center shadow shadow-[#00000017] rounded-[30px] p-[20px]'>
      <img className='w-[81px] h-[95px]  m-auto my-[30px]' src={img} alt="" />
      <h1 className='text-[20px] lg:text-[25px] my-[10px] lg:mt-[20px]'>{h1}</h1>
    </div>
  )
}

export default Page5
