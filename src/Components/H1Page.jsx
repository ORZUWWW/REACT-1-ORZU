import React from 'react'

const H1Page = ({ h1 , p}) => {
  return (
    <div className='sm:pl-[170px]  my-[20px]'>
        <h1 className='text-[60px] sm:text-start text-center font-bold text-[#FFFFFF]'>{h1}</h1>
        <p className='text-[#D2D2D2] my-[20px] sm:w-[480px]'>{p}</p>      
    </div>
  )
}

export default H1Page

