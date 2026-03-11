import React from 'react'

const Page2 = ({num,name,about}) => {
  return (
    <div className='text-center lg:w-[400px] w-[300px] h-[350px]  p-[25px] shadow-gray-600 shadow-lg rounded-[10px]'>
      <h1 className='text-[#1178B280] text-[65px] font-extrabold pt-[20px]'>{num}</h1>
      <h4 className='text-[20px] font-bold my-[25px]'>{name}</h4>
      <p className='text-[17px] text-gray-500'>{about}</p>
    </div>
  )
}

export default Page2
