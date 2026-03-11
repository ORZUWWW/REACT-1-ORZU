import React from 'react'

const H1page = ({h1,p}) => {
  return (
    <div className='lg:ml-[150px] mt-[100px]'>
        <h1 className='lg:text-[36px]  md:text-center lg:text-start text-center mb-[20px] md:text-[30px] text-[24px] text-[#1178B2]'>{h1}</h1>
        <p className='text-[#000000] lg:w-[850px] md:text-center lg:text-start text-center md:text-[20px] md:px-[100px] lg:px-0 lg:text-[20px] text-[16px]'>{p}</p>
    </div>
  )
}

export default H1page
