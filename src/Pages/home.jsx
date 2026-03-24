import React from 'react'
import r1 from "../images/r1.png"
import r2 from "../images/r2.png"
import r3 from "../images/r3.png"


import h1 from "../images/h1.svg"
import h2 from "../images/h2.svg"
import h3 from "../images/h3.svg"
import h4 from "../images/h4.svg"
import h5 from "../images/h5.svg"
import h6 from "../images/h6.svg"
import robot from "../images/robot.png"
import text from "../images/text1.svg"


const Home = () => {
  return (
    <div className='bg-[#030303] pb-[100px] text-[white]'>

<div className='flex gap-[80px] justify-center py-[40px] items-center'>
<div className='w-[712px] flex flex-col gap-[30px]'>
    <h1 className='text-[white] text-[72px] font-bold'>Transforming Data into <span className='bg-[#0A84FF] p-[3px] rounded-2xl text-[white]'>Decisions</span></h1>
    <p className='text-[20px] text-[#FFFFFFCC]'>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
    <button className='bg-[#0A84FF] w-[200px] text-[white] py-[10px] px-[35px] text-[14px] rounded-2xl'>Book a Meeting</button>
    <img src={text} alt="" />
</div>
<img src={robot} alt="" />

</div>

<div className='border-t-1 border-[#0A84FF] flex gap-[30px] items-center justify-center border-b-1 py-[20px]'>
    <img src={h1} alt="" />
    <img src={h2} alt="" />
    <img src={h3} alt="" />
    <img src={h4} alt="" />
    <img src={h5} alt="" />
    <img src={h6} alt="" />
</div>

<div className='flex justify-center'>
<h1 className='w-[580px] text-[white] text-[36px] font-bold text-center pt-[40px]'>Our Ultimate Set of Services for Your Ideas Implementation</h1>
</div>


<div className='flex gap-[50px] justify-center items-center py-[40px]'>
<div className='flex flex-col gap-[20px] w-[380px] bg-[#141414] text-center rounded-2xl p-[40px]'>
    <img src={r1} alt="" />
    <h2 className='text-[24px]'>Predictive Analytics</h2>
    <p className='text-[15px]'>Forecast trends and make data-driven decisions with our advanced ML models.</p>
</div>
<div className='flex flex-col gap-[20px] w-[380px] bg-[#141414] text-center rounded-2xl p-[40px]'>
    <img src={r2} alt="" />
    <h2 className='text-[24px]'>Predictive Analytics</h2>
    <p className='text-[15px]'>Forecast trends and make data-driven decisions with our advanced ML models.</p>
</div>
<div className='flex flex-col gap-[20px] w-[380px] bg-[#141414] text-center rounded-2xl p-[40px]'>
    <img src={r3} alt="" />
    <h2 className='text-[24px]'>Predictive Analytics</h2>
    <p className='text-[15px]'>Forecast trends and make data-driven decisions with our advanced ML models.</p>
</div>



</div>


<h1 className='text-[white] text-[36px] font-bold text-center py-[20px]'>Frequently Asked Questions</h1>





<div className='flex flex-col gap-[10px] justify-center items-center'>

<div className='flex items-center gap-[40px] bg-[#141414] p-[20px] rounded-2xl w-[50%] justify-center'>
<div className='bg-[#242424] w-[100px] text-center py-[15px] rounded-2xl text-[50px] font-bold px-[5px]'>
    <h1>01</h1>
</div>
<h1 className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing </h1>
<h1 className='text-[50px]'>+</h1>

</div>
<div className='flex items-center gap-[40px] bg-[#141414] p-[20px] rounded-2xl w-[50%] justify-center'>
<div className='bg-[#242424] w-[100px] text-center py-[15px] rounded-2xl text-[50px] font-bold px-[5px]'>
    <h1>02</h1>
</div>
<h1 className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing </h1>
<h1 className='text-[50px]'>+</h1>

</div>
<div className='flex items-center gap-[40px] bg-[#141414] p-[20px] rounded-2xl w-[50%] justify-center'>
<div className='bg-[#242424] w-[100px] text-center py-[15px] rounded-2xl text-[50px] font-bold px-[5px]'>
    <h1>03</h1>
</div>
<h1 className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing </h1>
<h1 className='text-[50px]'>+</h1>

</div>
<div className='flex items-center gap-[40px] bg-[#141414] p-[20px] rounded-2xl w-[50%] justify-center'>
<div className='bg-[#242424] w-[100px] text-center py-[15px] rounded-2xl text-[50px] font-bold px-[5px]'>
    <h1>04</h1>
</div>
<h1 className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing </h1>
<h1 className='text-[50px]'>+</h1>

</div>
<div className='flex items-center gap-[40px] bg-[#141414] p-[20px] rounded-2xl w-[50%] justify-center'>
<div className='bg-[#242424] w-[100px] text-center py-[15px] rounded-2xl text-[50px] font-bold px-[5px]'>
    <h1>05</h1>
</div>
<h1 className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing </h1>
<h1 className='text-[50px]'>+</h1>

</div>

</div>




      
    </div>
  )
}

export default Home
