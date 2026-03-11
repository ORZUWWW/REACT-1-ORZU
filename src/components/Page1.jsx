import React from 'react'

const Page1 = ({name,p,img}) => {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-[40px] md:gap-[30px] gap-[20px] my-[30px] px-[20px]'>

        <div className='lg:w-[674px] md:w-[500px] text-center lg:text-start md:text-start'>
            <h1 className='text-[#1178B2] lg:text-[25px] md:text-[22px] text-[18px]'>{name}</h1>

            <p className='my-[10px] lg:text-[20px] md:text-[18px] text-[14px]'>{p}</p>

            <button className='bg-[#07AF91] p-[15px] rounded-[5px] lg:w-[330px] md:w-[250px] w-[200px] text-[white] text-[16px] lg:text-[19px]'>
              Узнать подробнее
            </button>
        </div>

        <img className='lg:w-auto md:w-[350px] w-[280px]' src={img} alt="" />

    </div>
  )
}

export default Page1