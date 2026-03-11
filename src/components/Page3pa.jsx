import React from 'react'

const Page3pa = ({h1,p,children}) => {
  return (
    <div className='text-center '>
      <h1 className='bg-[#07AF91] lg:text-[40px] text-[white] text-[24px] m-auto font-bold lg:w-[1160px]'>{h1}</h1>
      <p className='my-[15px] lg:text-[24px] text-[16px] text-[white]'>{p}</p>
      {children}
    </div>
  )
}

export default Page3pa
