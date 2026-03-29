import React from 'react'
import bg from '../image/bg1.png'
import kfc from "../image/kfc.svg";
import papa from "../image/papa.svg";
import ali from "../image/ali.svg";
import sch from "../image/sch.svg";
import la from "../image/la.svg";
import lev from "../image/lev.svg";

import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";

import img from "../image/test.png"; 
import gg from "../image/gg.svg"


const Home = () => {
  return (
    <>

<div className="w-full  bg-[white] flex flex-col lg:w-[500px]lg:h-full bg-no-repeat bg-right bg-contain mt-[30px] lg:mt-0" 
          style={{
            backgroundImage: `url(${bg})`,
          }}>


      <div className="flex flex-col lg:flex-row items-center justify-between px-[20px] lg:px-[80px] py-[40px] lg:h-[500px]">

    
        <div className="flex flex-col  gap-[20px] max-w-[600px]">

          <h1 className="text-[36px] lg:w-[1300px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.1]">
            <span className="text-red-500">BOOST</span> YOUR EMAIL <br />
            MARKETING RESULTS!
          </h1>

          <p className="text-[16px] lg:text-[18px] text-gray-600">
            We help B2C brands grow their email-attributed revenue
          </p>

          <button className="w-[180px] h-[45px] lg:w-[200px] lg:h-[50px] bg-red-500 text-white rounded-md">
            BOOST YOUR RESULTS
          </button>

        </div>

   
        <div
         
        ></div>

      </div>

    

    </div>

 <div className="w-full border-t border-b border-gray-300 py-[20px]">

      <div className="flex flex-wrap justify-center items-center gap-[30px] lg:gap-[130px] px-[20px]">

        <img src={lev} alt="" className="h-[30px]" />
        <img src={sch} alt="" className="h-[30px]" />
        <img src={ali} alt="" className="h-[30px]" />
        <img src={la} alt="" className="h-[30px] " />
      <img src={papa} alt="" className="h-[30px] " />
        <img src={kfc} alt="" className="h-[30px]" />

      </div>

    </div>


      <div className="flex justify-center px-[20px] py-[40px]">

        <div className="w-full max-w-[1100px] bg-[#1E1E1E] rounded-[20px] p-[25px] lg:p-[40px] flex flex-col lg:flex-row justify-between gap-[30px] shadow-xl">

          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-white leading-[1.2]">
            WE ARE HERE <br />
            TO <span className="text-red-500">HELP</span> WHEN:
          </h2>

       
          <div className="flex flex-col gap-[10px] text-gray-300 text-[14px] lg:text-[16px]">

            <p>• Your email revenue is 20% or less</p>
            <p>• You need ideas to grow your email channel</p>
            <p>• You want expert help with implementing strategies</p>
            <p>• Your competitors’ emails outperform yours</p>
            <p>• Email deliverability became a problem</p>

          </div>

        </div>

      </div>



 <div className="w-full bg-[#F3F3F3] flex flex-col items-center">

     
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between py-[60px] px-[20px]">

     
        <div className="relative w-[320px] lg:mb-[100px] sm:w-[400px] lg:w-[500px] h-[320px]">

          <img
            src={img1}
            className="absolute top-[0] left-[0] w-[150px] h-[300px] sm:w-[260px] lg:w-[300px] lg:h-[400px] rotate-[-8deg] rounded-[20px] shadow-lg" />
          <img
            src={img2}
            className="absolute top-[20px] left-[60px]  w-[150px] h-[300px] sm:w-[280px] lg:w-[320px] lg:h-[400px] rotate-[-2deg] rounded-[20px] shadow-xl"  />

          <img
            src={img3}
            className="absolute top-[40px] left-[120px] w-[150px] h-[300px] sm:w-[300px] lg:w-[340px] lg:h-[400px] rotate-[6deg] rounded-[20px] shadow-2xl"
          />

        </div>

     
        <div className="flex flex-col gap-[15px] max-w-[400px] mt-[40px] lg:mt-0">

         <img className='w-[200px]' src={lev} alt="" />

          <p><span className="text-red-500 font-bold">Result:</span> $20K per email campaign</p>
          <p><span className="text-red-500 font-bold">Type:</span> Subscription e-commerce</p>
          <p><span className="text-red-500 font-bold">Company:</span> Lev Haolam</p>
          <p><span className="text-red-500 font-bold">Product:</span> Handmade gifts from Israel</p>
          <p><span className="text-red-500 font-bold">Platform:</span> Klaviyo</p>

          <button className="mt-[10px] w-[150px] h-[40px] font-bold border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
            LEARN MORE
          </button>

          <div className="flex gap-[10px] mt-[10px]">
            <div className="w-[35px] h-[35px] border rounded-full flex items-center justify-center cursor-pointer">←</div>
            <div className="w-[35px] h-[35px] border rounded-full flex items-center justify-center cursor-pointer">→</div>
          </div>

        </div>

      </div>


    <div className="w-full flex justify-center px-[20px] pb-[60px]">

  <div className="w-full max-w-[1100px] bg-[#1E1E1E] rounded-[20px] p-[25px] lg:p-[40px] flex flex-col gap-[30px] shadow-xl">

  
    <div className="flex flex-col lg:flex-row justify-between gap-[30px]">

 
      <div className="flex flex-col gap-[20px] max-w-[500px]">

        <h2 className="text-[28px] lg:w-[600px] sm:text-[36px] lg:text-[48px] font-bold text-white leading-[1.2]">
          WE <span className="text-red-500">TAKE CARE</span> <br />
          OF ALL YOUR EMAIL <br />
          MARKETING ACTIVITIES
        </h2>

        <p className="text-gray-400 text-[14px]">
          For mid-size businesses, we become your budget-friendly email
          marketing team, ensuring revenue from emails at a fraction of in-house costs.
        </p>

      </div>


      <div className="flex flex-col gap-[10px] text-gray-300 text-[14px]">
        <p>• Planning</p>
        <p>• Design</p>
        <p>• Copywriting</p>
        <p>• Analytics</p>
        <p>• Deliverability</p>
        <p>• Automation</p>
      </div>

    </div>


    <div className="w-full h-[1px] bg-gray-700"></div>

    <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px] text-gray-300">

  
      <p className="max-w-[500px] text-[14px] leading-[1.6] text-center lg:text-left">
        <span className="text-red-500 font-semibold">
          For midsize businesses,
        </span>
        we become your budget-friendly email marketing team, ensuring revenue from emails at a fraction of in-house costs. Discover how it works!
      </p>

   
      <div className="hidden lg:block w-[1px] h-[80px] bg-gray-600"></div>

      <p className="max-w-[500px] text-[14px] leading-[1.6] text-center lg:text-left">
        <span className="text-red-500 font-semibold">
          For email marketers at larger companies,
        </span>
        we enhance your productivity by handling execution, allowing you to focus on strategy. Learn why we are your support, not your competition!
      </p>

    </div>

  </div>

</div>

    </div>


  <div className="w-full bg-[#EDEDED] flex justify-center py-[80px] px-[20px] overflow-hidden">

      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-[40px] relative">

     
        <div className="flex flex-col gap-[30px] z-10">

          <h1 className="text-[40px] sm:text-[60px] font-bold text-[#2B2B2B]">
            TESTIMONIALS
          </h1>

      
          <div className="bg-white rounded-xl shadow-md p-[20px] max-w-[500px] flex gap-[15px]">
            <div className="text-red-500 text-[30px]"><img className='w-[60px]' src={gg} alt="" /></div>

            <div>
              <p className="text-[14px] text-gray-600">
                You have ensured a systematic approach to our email strategy
                and helped us streamline all chaotic thoughts and ideas we had
                about our emails!
              </p>

              <p className="text-red-500 text-[13px] mt-[10px]">
                Natalia Perelnik,
              </p>

              <p className="text-[12px] text-gray-500">
                CEO, Funexpected Games
              </p>
            </div>
          </div>

   
          <div className="bg-white rounded-xl shadow-md p-[20px] max-w-[500px] flex gap-[15px]">
            <div className="text-red-500 text-[30px]"><img className='w-[40px]' src={gg} alt="" /></div>

            <div>
              <p className="text-[14px] text-gray-600">
                You have shown great professionalism and attention to detail
                when it comes to email marketing!
              </p>

              <p className="text-red-500 text-[13px] mt-[10px]">
                Ron Shalev
              </p>

              <p className="text-[12px] text-gray-500">
                Founder, BYB Media
              </p>
            </div>
          </div>

        </div>

      
        <div className="relative w-full lg:w-[600px] h-[400px]">

       
          <div className="absolute top-0 right-0 w-full h-full bg-red-500 clip-path-custom"></div>

       
          <img
            src={img}
            alt=""
            className="absolute bottom-0 right-0 w-[90%] h-[85%] object-cover grayscale"
          />

        </div>

      </div>

    </div>

    </>
  )
}

export default Home
