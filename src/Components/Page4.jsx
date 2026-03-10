import React from 'react'

const Page4 = ({h2,h3,p,h4,img}) => {
  return (
    <div className='w-[360px] p-[25px] bg-[#F6F6F7] rounded-[10px]'>
      <h2 className='text-[#494B44] font-bold text-[24px]'>{h2}</h2>
      <hr />
        <h3 className='text-[22px] mt-[10px] text-[#0E9E2F]'>{h3}</h3>
        <p className='text-[#92938F] my-[10px] '>{p}</p>
        <div className='flex items-center  justify-between my-[30px]'>
           <h4 className='text-[#0E9E2F] font-bold text-[20px]'>{h4}</h4>
        </div>
    </div>
  )
}

export default Page4
