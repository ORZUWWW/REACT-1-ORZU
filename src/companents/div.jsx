import React from 'react'
import del from '../assets/dell.png'
const Div = ({name,time,data,student1,student2,namestudent,filial,day}) => {
    let s=student2*0.8<student1
  return (
    <div className='w-[300px] border p-[10px]'>
      <h2 className='font-bold text-[20px]'>{name}</h2>
      <div className='flex justify-between'>
        <h2 className='font-bold text-[20px]'>{time}</h2>  
        <div>
        <p className={`py-[5px] ${s?'bg-[#21e721]':'bg-[#ff0000]'} px-[10px] rounded-[30px] text-white`}>{student1}/{student2}</p>
         <p className='text-[13px] text-[gray] pl-[6px] '>{namestudent}</p>
        </div>
      </div>
      <p className='text-[13px] text-[gray] font-bold '>{data}</p>
      <p className='text-[13px]  py-[5px] px-[10px] bg-[#9138ef61] my-[10px] rounded-[4px] text-[#570297] w-[70px] text-center text-[3px] font-bold'>{filial}</p>
      <hr className='border-t border-[#ccc] my-[10px]'></hr>
      <div className='flex justify-between'>
        <div className=''>
      <p  className={` ${s?'bg-[#21e721]':'bg-[#ff0000]'} py-[5px] px-[3px] rounded-[30px] text-center text-[white] text-[20px]`}>{student2}</p>
      <p>Qualilfors</p>
        </div>
      <h2 className='font-bold'>{day}</h2>
      </div>
      <img src={del} alt="" />
    </div>
  )
}

export default Div
