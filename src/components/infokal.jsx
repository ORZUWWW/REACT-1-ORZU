import React from 'react'

const Infokal = ({bg,name,about}) => {
  return (
    <div className={`border border-[#DFCCB7] w-[240px] h-[90px] text-center text-[#493E3E] ${bg} p-[15px] rounded-[30px] rounded-[30px]  `}>
      <h3 className='text-[22px] font-bold'>{name}</h3>
      <p className='text-[#A98C64] pt-1'>{about}</p>
    </div>
  )
}

export default Infokal
