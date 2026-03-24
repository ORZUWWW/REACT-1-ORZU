import React from 'react'
import sap from '../images/sapweni.png'
import usa from '../images/usa.svg'
import t from '../images/tel.svg'
import l from '../images/location.svg'
import e from '../images/email.svg'
const Contact = () => {
  return (
    <div className='bg-[#030303] text-[white] pb-[100px]'>
     


<div className='flex justify-center py-[40px]'>
<div className='bg-[#191919] p-[10px] w-[70%] flex gap-[100px] items-center justify-center rounded-2xl '>
<div className='w-[567px] flex flex-col gap-[30px]'>
  <h1 className='text-[40px] text-[#FFFFFFE5] font-bold'>Contact Us</h1>
  <p className='text-[#FFFFFFE5] text-[16px]'>We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.</p>
    <button className="bg-[#0A84FF] w-[200px] py-[14px] rounded-xl text-white text-[16px]">
  Get In Touch Now
  </button>
</div>

<img src={sap} alt="" />
</div>
</div>


<div className='flex gap-[50px] justify-center items-center'>



<div style={{margin:"50px 0px",}} className="w-[645px] h-[580px] bg-[#141414] rounded-3xl p-[30px] flex flex-col gap-[20px]">

  <h1 className="text-white text-[22px] font-semibold">
    Send Us a Message
  </h1>

  <div className="flex flex-col gap-[15px]">

    <div className="flex gap-[15px]">
      <input
        type="text"
        placeholder="First Name"
        className="w-full bg-[#1E1E1E] p-[12px] rounded-xl outline-none text-white"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full bg-[#1E1E1E] p-[12px] rounded-xl outline-none text-white"
      />
    </div>

    <input
      type="email"
      placeholder="Email"
      className="bg-[#1E1E1E] p-[12px] rounded-xl outline-none text-white"
    />

    <input
      type="text"
      placeholder="Company"
      className="bg-[#1E1E1E] p-[12px] rounded-xl outline-none text-white"
    />

    <div className="flex items-center bg-[#1E1E1E] rounded-xl px-[10px]">
      <div className="flex items-center gap-[5px] bg-[#2A2A2A] px-[20px] py-[6px] rounded-lg mr-[10px]">
      <img src={usa} alt="" />  +1
      </div>
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full bg-transparent p-[12px] outline-none text-white"
      />
    </div>

    <textarea
      placeholder="Message"
      className="bg-[#1E1E1E] p-[12px] rounded-xl outline-none text-white h-[120px] resize-none"
    />

  </div>

  <button className="mt-auto bg-[#0A84FF] py-[12px] rounded-xl text-white flex items-center justify-center gap-[10px] hover:opacity-90 transition">
    Send ✈️
  </button>

</div>







<div className='flex flex-col gap-[30px]'>



<div className="w-[400px] bg-[#141414] rounded-3xl p-[25px] flex flex-col gap-[20px]">

  <h1 className="text-white text-[18px] font-semibold">
    Contact Information
  </h1>

  <div className="flex gap-[15px] items-start">
    <div className="text-[#0A84FF] text-[18px]"><img src={e} alt="" /></div>
    <div>
      <h2 className="text-white text-[14px]">Email</h2>
      <p className="text-[#FFFFFF99] text-[13px]">
        contact@catalystanalytics.io
      </p>
    </div>
  </div>

  
  <div className="flex gap-[15px] items-start">
    <div className="text-[#0A84FF] text-[18px]"><img src={t} alt="" /></div>
    <div>
      <h2 className="text-white text-[14px]">Phone</h2>
      <p className="text-[#FFFFFF99] text-[13px]">
        (469) 712-4672
      </p>
    </div>
  </div>

  <div className="flex gap-[15px] items-start">
    <div className="text-[#0A84FF] text-[18px]"><img src={l} alt="" /></div>
    <div>
      <h2 className="text-white text-[14px]">Office</h2>
      <p className="text-[#FFFFFF99] text-[13px] ">
        5511 Parkcrest Dr, Suite 103 <br />
        Austin, TX 78731 <br />
        United States
      </p>
    </div>
  </div>

</div>



<div className="w-[400px] bg-[#141414] rounded-3xl p-[25px] flex flex-col gap-[20px]">

  <h1 className="text-white text-[18px] font-semibold">
    Contact Information
  </h1>

  <p className="text-[#FFFFFF99] text-[14px] leading-[22px]">
    Want to discuss your project in detail? Schedule a free 30-minute 
    consultation with our team of experts. We'll help you understand 
    how our solutions can benefit your business.
  </p>

  <button className="bg-[#0A84FF] py-[12px] rounded-xl text-white text-[14px] hover:opacity-90 transition">
    Book a Meeting
  </button>

</div>


</div>




</div>



    </div>
  )
}

export default Contact
