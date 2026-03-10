import React from 'react'

const Page5 = ({img,name,about,data}) => {
  return (
    <div className='w-[360px]'>
     <img src={img} />
     <h2 className='text-[#494B44] my-[10px] text-[24px]'>{name}</h2>
     <p className='text-[#92938F] my-[10px]'>{about}</p>
     <p className='text-[#0E9E2F]'>{data}</p>
    </div>
  )
}

export default Page5
