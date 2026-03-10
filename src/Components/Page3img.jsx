import React from 'react'

const Page3img = ({h1, img1, img2}) => {
  return (
    <div>
      <div className='sm:flex hidden gap-[330px] items-start justify-center'>
        <h1 className='text-[#494B44] text-[40px] font-bold'>{h1}</h1>
        <img src={img1} alt="" />
      </div>
      <img className='w-[80%] sm:h-[500px] m-auto my-[10px]' src={img2} alt="" />
    </div>
  )
}

export default Page3img
