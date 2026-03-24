import React from 'react'


import i1 from '../images/i1.svg'
import i2 from '../images/i2.svg'
import i3 from '../images/i3.svg'
import i4 from '../images/i4.svg'
import sumka from '../images/sumka.png'


const Careers = () => {
  return (
    <div className='bg-[#030303] text-[white] pb-[100px]'>


<div className='flex justify-center py-[40px]'>
<div className='bg-[#191919] p-[10px] w-[70%] flex gap-[100px] items-center justify-center rounded-2xl '>
<div className='w-[567px] flex flex-col gap-[30px]'>
  <h1 className='text-[40px] text-[#FFFFFFE5] font-bold'>Build the Future with Us</h1>
  <p className='text-[#FFFFFFE5] text-[16px]'>We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.</p>
    <button className="bg-[#0A84FF] w-[200px] py-[14px] rounded-xl text-white text-[16px]">
   Explore Open Positions
  </button>
</div>

<img src={sumka} alt="" />
</div>
</div>


<div className='flex gap-[50px] bg-[#0B0B0B] py-[50px] items-center justify-center'>
<select className='text-[#FFFFFFCC] py-[15px] px-[30px] w-[200px] bg-[#191919] rounded-4xl' name="" id="">
  <option value="">Departments</option>
</select>
<select className='text-[#FFFFFFCC] py-[15px] px-[30px] w-[200px] bg-[#191919] rounded-4xl' name="" id="">
  <option value="">Experience</option>
</select>
<select className='text-[#FFFFFFCC] py-[15px] px-[30px] w-[200px] bg-[#191919] rounded-4xl' name="" id="">
  <option value="">Job Type</option>
</select>
<select className='text-[#FFFFFFCC] py-[15px] px-[30px] w-[200px] bg-[#191919] rounded-4xl' name="" id="">
  <option value="">Workplace Type</option>
</select>
<input type="search" className='text-[#FFFFFFCC] py-[15px] px-[30px] w-[200px] bg-[#191919] rounded-4xl' placeholder='Search by keywords...' />

</div>



<div className='flex gap-[20px] flex-wrap justify-center items-center'>

<div className="w-[623px] h-[450px] bg-[#141414] rounded-3xl p-[30px] flex flex-col justify-between">

  <div className="flex flex-col gap-[25px]">
    <div className="flex items-center gap-[20px]">
      <div className="w-[60px] h-[60px] bg-[#1E1E1E] rounded-xl flex items-center justify-center">
        <img src={i1} alt="" className="w-[30px] h-[30px] " />
      </div>
      <h1 className="text-[22px] font-semibold text-white">
        WEB DESIGNER
      </h1>
    </div>


    <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full w-fit text-[14px] text-[#FFFFFFCC]">
      Salary • $45,000 - $60,000 per year
    </div>


    <div className="flex gap-[10px] flex-wrap">

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Experience • 1+ year
      </div>

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Deadline • 30/09/2025
      </div>

    </div>

   
    <div className="">
      <h2 className="text-[18px] font-semibold mb-[10px] text-white">
        SKILLS
      </h2>
      <p className="text-[14px] text-[#FFFFFFCC] ">
        Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.),
        strong understanding of UI/UX design principles, responsive design expertise.
      </p>
    </div>

  </div>

  <button className="bg-[#0A84FF] w-full py-[14px] rounded-xl text-white text-[16px]">
    Apply Now
  </button>

</div>
<div className="w-[623px] h-[450px] bg-[#141414] rounded-3xl p-[30px] flex flex-col justify-between">

  <div className="flex flex-col gap-[25px]">
    <div className="flex items-center gap-[20px]">
      <div className="w-[60px] h-[60px] bg-[#1E1E1E] rounded-xl flex items-center justify-center">
        <img src={i2} alt="" className="w-[30px] h-[30px] " />
      </div>
      <h1 className="text-[22px] font-semibold text-white">
        WEB DESIGNER
      </h1>
    </div>


    <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full w-fit text-[14px] text-[#FFFFFFCC]">
      Salary • $45,000 - $60,000 per year
    </div>


    <div className="flex gap-[10px] flex-wrap">

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Experience • 1+ year
      </div>

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Deadline • 30/09/2025
      </div>

    </div>

   
    <div className="">
      <h2 className="text-[18px] font-semibold mb-[10px] text-white">
        SKILLS
      </h2>
      <p className="text-[14px] text-[#FFFFFFCC] ">
        Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.),
        strong understanding of UI/UX design principles, responsive design expertise.
      </p>
    </div>

  </div>

  <button className="bg-[#0A84FF] w-full py-[14px] rounded-xl text-white text-[16px]">
    Apply Now
  </button>

</div>
<div className="w-[623px] h-[450px] bg-[#141414] rounded-3xl p-[30px] flex flex-col justify-between">

  <div className="flex flex-col gap-[25px]">
    <div className="flex items-center gap-[20px]">
      <div className="w-[60px] h-[60px] bg-[#1E1E1E] rounded-xl flex items-center justify-center">
        <img src={i3} alt="" className="w-[30px] h-[30px] " />
      </div>
      <h1 className="text-[22px] font-semibold text-white">
        WEB DESIGNER
      </h1>
    </div>


    <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full w-fit text-[14px] text-[#FFFFFFCC]">
      Salary • $45,000 - $60,000 per year
    </div>


    <div className="flex gap-[10px] flex-wrap">

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Experience • 1+ year
      </div>

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Deadline • 30/09/2025
      </div>

    </div>

   
    <div className="">
      <h2 className="text-[18px] font-semibold mb-[10px] text-white">
        SKILLS
      </h2>
      <p className="text-[14px] text-[#FFFFFFCC] ">
        Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.),
        strong understanding of UI/UX design principles, responsive design expertise.
      </p>
    </div>

  </div>

  <button className="bg-[#0A84FF] w-full py-[14px] rounded-xl text-white text-[16px]">
    Apply Now
  </button>

</div>
<div className="w-[623px] h-[450px] bg-[#141414] rounded-3xl p-[30px] flex flex-col justify-between">

  <div className="flex flex-col gap-[25px]">
    <div className="flex items-center gap-[20px]">
      <div className="w-[60px] h-[60px] bg-[#1E1E1E] rounded-xl flex items-center justify-center">
        <img src={i4} alt="" className="w-[30px] h-[30px] " />
      </div>
      <h1 className="text-[22px] font-semibold text-white">
        WEB DESIGNER
      </h1>
    </div>


    <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full w-fit text-[14px] text-[#FFFFFFCC]">
      Salary • $45,000 - $60,000 per year
    </div>


    <div className="flex gap-[10px] flex-wrap">

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Experience • 1+ year
      </div>

      <div className="bg-[#1E1E1E] px-[15px] py-[8px] rounded-full text-[14px] text-[#FFFFFFCC]">
        Deadline • 30/09/2025
      </div>

    </div>

   
    <div className="">
      <h2 className="text-[18px] font-semibold mb-[10px] text-white">
        SKILLS
      </h2>
      <p className="text-[14px] text-[#FFFFFFCC] ">
        Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.),
        strong understanding of UI/UX design principles, responsive design expertise.
      </p>
    </div>

  </div>

  <button className="bg-[#0A84FF] w-full py-[14px] rounded-xl text-white text-[16px]">
    Apply Now
  </button>

</div>

</div>


<div className='flex justify-center items-center py-[80px]'>


<div className='flex flex-col w-[70%] rounded-2xl p-[50px] bg-[#191919] gap-[30px] justify-center items-center'>
  <h1 className='text-[36px] font-bold'>Ready to discuss</h1>
  <p className='text-[20px] font-bold'>your product needs with <span className='text-[#0A84FF]'>Catalyst Analytic</span> experts?</p>
  <button className="bg-[#0A84FF] w-[200px] py-[14px] rounded-xl text-white text-[16px]">
   Explore Open Positions
  </button>
</div>

</div>





    </div>
  )
}

export default Careers
