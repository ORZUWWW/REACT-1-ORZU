import React from 'react'

const Page1text = ({h1,p,children}) => {
  return (
    <div className='sm:w-[800px]  '>
      <h1 className='sm:text-[60px] sm:text-[white] font-bold text-[24px]'>{h1}</h1>
      <p className='text-[#D2D2D2] text-[18px]  sm:w-[600px] my-[20px]'>{p}</p>
      {children}
    </div>
  )
}

export default Page1text    
