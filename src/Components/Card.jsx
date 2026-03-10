import React from 'react'
import Btnsabz from './Btnsabz'

const Card = ({img,name,about}) => {
  return (
    <div className='w-[360px] p-[22px] bg-[#535353] rounded-tr-[100px]'>
      <img className='m-auto' src={img} alt="" />
      <h1 className='text-[26px] font-bold text-[#FFFFFF]'>{name}</h1>
      <p className='text-[#D2D2D2] my-[20px]'>{about}</p>
<Btnsabz name="Подробнее о товаре" />
    </div>
  )
}

export default Card
