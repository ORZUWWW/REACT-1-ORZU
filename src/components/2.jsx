import React from 'react'
import Btnsabz from './btnsabz'

const Page2 = ({children}) => {
  return (
   <div className='bg-[#E2DDC0] p-[20px] rounded-[30px]'>
  <h1 className='text-[40px] font-bold'>Подберите рацион для своих целей</h1>
  <div style={{margin:"30px 0px"}} className='flex gap-[30px] items-center '> 
    {children}  
  </div>
</div>
  )
}

export default Page2
