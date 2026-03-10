import React from 'react'

const Page2 = ({img1,img2,img3,img4,h1,p1,p2}) => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-[50px] py-[60px]'>
        <div className='w-[370px]'>
            <h1 className='text-[48px] text-[#0E9E2F] font-bold'>{h1}</h1>
            <p className='text-[#92938F]  my-[40px]'>{p1}</p>
            <p className='text-[#92938F] '>{p2}</p>
        </div>
        <img className='sm:w-[760px] h-[390px] w-[93%] rounded-[8px]' src={img1} alt="" />
        <img className='w-[370px] h-[190px] rounded-[8px]' src={img2} alt="" />
        <img className='w-[370px] h-[190px] rounded-[8px]' src={img3} alt="" />
        <img className='w-[370px] h-[190px] rounded-[8px]' src={img4} alt="" />  
    </div>
  )
}

export default Page2


