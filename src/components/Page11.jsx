import React from 'react'

const Page11 = () => {
  return (
      <div className='w-[712px]'>
        <h1 className='text-[60px] font-bold '>Прогрессивное питание на каждый день</h1>
        <p style={{margin:"25px 0px"}} className='mt-8 text-[#493E3E] text-[20px]'>Сбалансированный рацион в  современном формате — Супер-боул</p>

        <div style={{margin:"50px 0px"}} className=' flex gap-[30px] items-center'>
            <button className='bg-[#4D8F76] w-[203px] text-center text-white p-[10px] rounded-[30px]' >Подобрать питание</button>
        <button className=' w-[203px] text-center  p-[10px] rounded-[30px] border border-[#4D8F76] text-[#4D8F76] text-[15px]' >Получить консультацию</button>
        </div>
      </div>
  )
}

export default Page11
