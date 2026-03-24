import React from 'react'
import { Link, Outlet } from 'react-router'
import logo from "../images/Logo.svg"
import e from "../images/email.svg"
import tel from "../images/tel.svg"
import l from "../images/location.svg"
import f from "../images/f.svg"
import t from "../images/t.svg"
import ind from "../images/i.svg"



const Layout = () => {
  return (
    <div>
        <nav className='bg-[#030303] flex gap-[320px] justify-center items-center py-[10px]'>
    <img src={logo} alt="" />
            <div className='flex gap-[30px] items-center text-[white]'>
            <Link to={"/"} >Home</Link>
            <Link to={"/About"}>Services</Link>
            <Link to={"/Careers"}>Careers</Link>
            <Link to={"/CareerDetails"}>Career Details</Link>
            <Link to={"/Contact"}>Contact</Link>
            </div>
            <button className='bg-[#0A84FF] text-[white] py-[10px] px-[35px] text-[14px] rounded-2xl'>Contact Us</button>
        </nav>
        <div>
            <Outlet />


<div className="w-full h-[400px] bg-black flex flex-col justify-between px-[80px] py-[40px]">


  <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-[30px]">


    <div className="flex items-center gap-[60px]">
      <img src={logo} alt="" className="w-[150px]" />

      <div className="flex gap-[30px] text-[#FFFFFFCC] text-[14px]">
        <p>Home</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>About Us</p>
        <p>Careers</p>
      </div>
    </div>

    <div className="flex gap-[15px] bg-[#0D0D0D] p-[10px] rounded-xl border border-[#1E1E1E]">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#141414] rounded-lg text-[#0A84FF]"><img src={f} alt="" /></div>
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#141414] rounded-lg text-[#0A84FF]"><img src={t} alt="" /></div>
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#141414] rounded-lg text-[#0A84FF]"><img src={ind} alt="" /></div>
    </div>

  </div>

  {/* MIDDLE */}
  <div className="flex justify-between items-center text-[#FFFFFF99] text-[14px]">

    <div className="flex gap-[30px] items-center">
      <p className='flex gap-[4PX]'> <img src={e} alt="" /> contact@catalystanalytics.io</p>
      <p className='flex gap-[4PX]'> <img src={tel} alt="" /> +1 (469) 712-4672</p>
      <p className='flex gap-[4PX]'> <img src={l} alt="" /> 5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
    </div>

    <div className="flex gap-[20px]">
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="text-center text-[#FFFFFF66] text-[13px]">
    © 2025 Catalyst Analytics. All rights reserved.
  </div>

</div>






        </div>
    </div>
  )
}

export default Layout
