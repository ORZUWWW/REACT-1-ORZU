import React from 'react'
import logo from './logo.svg'

const Logo = () => {
  return (
    <div style={{padding:"15px 0px"}} className='flex gap-[150px] items-center justify-center my-[15px]'>
    
    <img src={logo} alt="" />
    
    <div className='flex gap-[30px] text-[18px] text-[#493E3E]'>
      <p>Подбор рациона</p>
      <p>Программы питания</p>
      <p>О нас</p>
      <p>Доставка</p>
      <p>FAQ</p>
      <p>Отзывы</p>
    </div>
    
    <h1 className='text-[#493E3E] text-[24px] font-bold'>+7988 500-1-700</h1>
    
    
    </div>
  )
}

export default Logo
