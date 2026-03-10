import React from 'react'

const Page3 = ({h1,p,children}) => {
  return (
    <div className='page3img  flex-col justify-center items-center gap-[50px] text-center my-[70px]'>
      <h1 className='text-[60px] font-bold text-[white] pt-[100px]'>{h1}</h1>
     <p className='w-[450px] text-[white] my-[20px] m-auto'>{p}</p>
      {children}
    </div>
  )
}

export default Page3
