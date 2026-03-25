import React, { useState } from 'react'
import { useParams } from 'react-router';
import laptop from '../img/macbook.png'
import wallet from '../img/wallet.webp'
import certificate from '../img/certification.png'
import h from '../img/html.png'
import r from '../img/react.png'
import f from '../img/figma.png'
import c from '../img/cpp.png'
import j from '../img/js.png'
import p from '../img/python.png'
import csharp from '../img/csharp.png'
import git from '../img/git.png'
import flutter from '../img/flutter.png'
import kids from '../img/kids.png'


const Pageid = () => {


  const [data, setdata] = useState([
      {
        id: 1,
        name: "HTML & CSS",
        img: h,
        minabout: "Learn the building blocks of the web",
        data: "1 month",
        kurs: "Frontend",
        about:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
        divabout:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
        divname:"Why HTML & CSS?",
        name1:" HTML Basics",
        name2:" CSS Basics",
        name3:" Layouts & Positioning",
        name4:" Responsive Design",
        name5:" Flexbox",
        name6:" Transitions & Animations",
        bg: {
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
    backgroundSize: "200% 100%",
    animation: "shine 3s linear infinite"
  }
  
      },
      {
        id: 2,
        name: "JavaScript",
        img: j,
        minabout: "Master programming fundamentals with JavaScript",
        data: "2 months",
        kurs: "Frontend",
        about:"Master React and Next.js — from fundamentals to advanced projects. Build modern, SEO-friendly web applications with SSR, SSG, API routes, and deploy them on Vercel or Netlify",
        divabout:"A 3-month roadmap covering React fundamentals, hooks, routing, state management, data fetching, and moving into Next.js with SSR, SSG, API routes, server components, and advanced optimizations. Includes real-world projects and a final SaaS app deployment.",
        divname:"Why React?",
        name1:" Basics",
        name2:" Strings & Numbers",
        name3:" Arrays, Callbacks & Objects",
        name4:" OOP & Date",
        name5:" DOM, BOM & CRUD",
        name6:" Async Programming",
      bg: {
    background: "linear-gradient(135deg, #f7971e, #ffd200)",
    backgroundSize: "200% 100%",
    animation: "shine 3s linear infinite"
  }
  
      },
      {
        id: 3,
        name: "React",
        img: r,
        minabout: "Build interactive UIs with the popular JavaScript library",
        data: "3 month",
        kurs: "Frontend",
        about:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
        divabout:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
        divname:"Why HTML & CSS?",
        name1:"React Basics",
        name2:"Hooks & React Concepts",
        name3:"Routing",
        name4:"Forms & Validation",
        name5:"State Management & Data Fetching",
        name6:"Next.js Fundamentals",
  bg: {
    background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    backgroundSize: "200% 100%",
    animation: "shine 3s linear infinite"
  }
  
      },
      {
        id: 4,
        name: "Design",
        img: f,
        minabout: "Create beautiful, functional digital experiences",
        data: "4 month",
        kurs: "Frontend",
        about:"Comprehensive design education covering Photoshop, CorelDRAW and Figma",
        divabout:"A 4-month program covering Photoshop (1 month), CorelDRAW (1 month), and Figma . Learn image editing, vector graphics, and UI/UX design with practical projects for each tool.",
        divname:"Why Design?",
        name1:"Adobe Photoshop ",
        name2:"CorelDRAW ",
        name3:"Figma Foundations ",
        name4:"Advanced Figma ",
        name5:"Figma Foundations ",
        name6:"Adobe Photoshop ",
  bg: {
    background: "linear-gradient(135deg, #56ab2f, #a8e063)",
    backgroundSize: "200% 100%",
    animation: "shine 3s linear infinite"
  }
  
      },
      {
        id: 5,
        name: "Basics of C++",
        img: c,
        minabout: "Start your programming journey with C++",
        data: "1 month",
        kurs: "Backend",
        about:"Learn C++ from scratch — covering syntax, logic, loops, and arrays in just 1 month. Build a strong foundation for advanced programming and algorithms.",
        divabout:"This C++ course introduces you to the basics of programming and problem-solving. You will learn the structure of a C++ program, variables, data types, operators, input/output, conditional statements, loops, and arrays. The course is designed to give you a strong foundation in programming logic and prepare you for advanced topics like functions, pointers, and object-oriented programming.",
        divname:"Why C++?",
        name1:" Introduction & I/O",
        name2:" Conditional Statements",
        name3:" Loops",
        name4:" Arrays",
        name5:" Conditional Statements",
        name6:" Arrays",
  bg: {
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    backgroundSize: "200% 100%",
    animation: "shine 3s linear infinite"
  }
  
      },
      {
        id: 6,
        name: "Python",
        img: p,
        minabout: "Learn one of the most versatile programming languages",
        data: "4 month",
        kurs: "Backend",
        about:"Comprehensive backend development with Python, Django, FastAPI and databases",
        divabout:"A 4-month intensive backend development course covering Python fundamentals, PostgreSQL, SQLAlchemy, Django framework, Django REST Framework, FastAPI, authentication systems, deployment, and advanced backend concepts.",
        divname:"Why Python ?",
        name1:" Python Fundamentals",
        name2:" Databases & Telegram Bot",
        name3:" Django Framework",
        name4:" DRF, FastAPI",
        name5:" Deployment",
        name6:" Django Framework",
  bg: {
    background: "linear-gradient(135deg, #11998e, #38ef7d)",
    backgroundSize: "200% 100%",
    animation: "shine 3s linear infinite"
  }
  
      },{
  id: 7,
  name: "C#",
  img: csharp,
  minabout: "Build versatile applications with this powerful language",
  data: "3 months",
  kurs: "Backend",
  about: "Learn C# and .NET to build desktop, web, and enterprise applications.",
  divabout: "You will learn syntax, OOP, working with .NET, building apps and APIs.",
  divname: "Why C#?",
  name1: "Basics",
  name2: "OOP",
  name3: ".NET Core",
  name4: "Web API",
  name5: "Databases",
  name6: "Projects",
  bg: {
    background: "linear-gradient(135deg, #7b4397, #dc2430)"
  }
},
{
  id: 8,
  name: "Git",
  img: git,
  minabout: "Master version control to collaborate on coding projects",
  data: "1 month",
  kurs: "Frontend",
  about: "Learn Git and GitHub for version control and teamwork.",
  divabout: "Understand commits, branches, merging, GitHub workflows and collaboration.",
  divname: "Why Git?",
  name1: "Git Basics",
  name2: "Repositories",
  name3: "Branches",
  name4: "Merging",
  name5: "GitHub",
  name6: "Team Work",
  bg: {
    background: "linear-gradient(135deg, #ff512f, #dd2476)"
  }
},
{
  id: 9,
  name: "Flutter",
  img: flutter,
  minabout: "Build cross-platform mobile apps with a single codebase",
  data: "4 months",
  kurs: "Mobile",
  about: "Create Android and iOS apps using Flutter and Dart.",
  divabout: "Learn UI building, state management, APIs and publishing apps.",
  divname: "Why Flutter?",
  name1: "Dart Basics",
  name2: "Widgets",
  name3: "Layouts",
  name4: "State Management",
  name5: "API Integration",
  name6: "Deployment",
  bg: {
    background: "linear-gradient(135deg, #2193b0, #6dd5ed)"
  }
},
{
  id: 10,
  name: "Programming for teenagers",
  img: kids, 
  minabout: "Programming fundamentals for young learners",
  data: "10 months",
  kurs: "Kids",
  about: "Learn programming basics in a fun and simple way.",
  divabout: "Perfect for beginners: logic, games, simple apps and creativity.",
  divname: "Why Kids Programming?",
  name1: "Logic",
  name2: "Games",
  name3: "Basics",
  name4: "Creativity",
  name5: "Mini Projects",
  name6: "Fun Learning",
  bg: {
    background: "linear-gradient(135deg, #1e3c72, #2a5298)"
  }
}







      
    ]);


  let  {productid}=useParams()
  console.log(useParams());
  
  let e=data.find((e)=>e.id==productid)
  return (
    <div className='bg-[#F3F5F7]'>


<div style={{padding:"30px 0px "}} className='flex gap-[200px] justify-center items-center'>

<div className='flex flex-col gap-[60px] w-[700px]'>
  <h1 className='text-[40px] text-[#1E88C8] font-bold'>{e.name}</h1>
  <p className='text-[20px] '>{e.about}</p>
   <button className="w-[230px] h-[55px] border-2 border-[#1E88C8] text-[#1E88C8] rounded-full flex items-center justify-center gap-[10px] hover:bg-[#1E88C8] hover:text-white transition">
      Example certificate
      <span className="text-[20px]">→</span>
    </button>
</div>

<img className='h-[300px] w-[300px]' src={e.img} alt="" />

</div>



<div className="w-full bg-[#F3F5F7] py-[40px] flex justify-center">
  <div className="w-[90%] flex flex-wrap gap-[25px] justify-center">

   
    <div className="flex items-center gap-[15px] bg-[white] px-[25px] py-[15px] rounded-[20px] shadow-sm w-[280px]">
      <span className="text-[22px] text-[#2EA3F2]">📅</span>
      <p className="text-[16px] text-[#2C3E50]">5 April</p>
    </div>

    <div className="flex items-center gap-[15px] bg-[white] px-[25px] py-[15px] rounded-[20px] shadow-sm w-[280px]">
      <span className="text-[22px] text-[#2EA3F2]">⏰</span>
      <p className="text-[16px] text-[#2C3E50]">6 classes per week</p>
    </div>

    <div className="flex items-center gap-[15px] bg-[white]  px-[25px] py-[15px] rounded-[20px] shadow-sm w-[280px]">
      <span className="text-[22px] text-[#2EA3F2]">📋</span>
      <p className="text-[16px] text-[#2C3E50]">3 portfolio projects</p>
    </div>

    <div className="flex items-center gap-[15px] bg-[white]  px-[25px] py-[15px] rounded-[20px] shadow-sm w-[280px]">
      <span className="text-[22px] text-[#2EA3F2]">👥</span>
      <p className="text-[16px] text-[#2C3E50]">Group of 10–12 people</p>
    </div>

    <div className="flex items-center gap-[15px] justify-center bg-[white]  px-[25px] py-[15px] rounded-[20px] shadow-sm w-[450px]">
      <span className="text-[22px] text-[#2EA3F2]">🛋️</span>
      <p className="text-[16px] text-[#2C3E50]">8 seats left</p>
    </div>

    <div className="flex items-center gap-[15px] justify-center bg-[white] px-[25px] py-[15px] rounded-[20px] shadow-sm w-[450px]">
      <span className="text-[22px] text-[#2EA3F2]">🏅</span>
      <p className="text-[16px] text-[#2C3E50]">Certificate upon completion</p>
    </div>

  </div>
</div>



<div className='flex justify-center'>
<div className='w-[80%] bg-[white] rounded-2xl p-[30px]'>
  <h1 className='text-[40px] font-bold pb-[20px]'>{e.divname}</h1>
  <p className='text-[18px]'>{e.divabout}</p>
</div>
</div>




<div className="w-full bg-[#F3F5F7] flex justify-center py-[60px]">

  <div className="w-[90%] bg-[#EDEDED] rounded-[40px] px-[60px] py-[50px] flex items-center justify-between">

    <div>
      <img src={wallet} alt="" className="w-[580px]" />
    </div>

    <div className="flex flex-col gap-[40px] w-full ml-[40px]">

      <h1 className="text-[36px] font-bold text-[#2EA3F2]">
        Average salaries in IT professions
      </h1>


      <div className="flex items-center justify-between">

        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[14px] text-[#555]">JUNIOR</p>
            <div className="w-[200px] h-[2px] bg-[#D0D5DD]" />
          </div>
          <h2 className="text-[32px] font-bold text-[#2EA3F2]">250$</h2>
        </div>

  
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[14px] text-[#555]">MIDDLE</p>
            <div className="w-[200px] h-[2px] bg-[#D0D5DD]" />
          </div>
          <h2 className="text-[32px] font-bold text-[#2EA3F2]">600$</h2>
        </div>


        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-[14px] text-[#555]">SENIOR</p>
            <div className="w-[200px] h-[2px] bg-[#D0D5DD]" />
          </div>
          <h2 className="text-[32px] font-bold text-[#2EA3F2]">1500$</h2>
        </div>

      </div>

    </div>

  </div>

</div>

<div className="w-full bg-[#F3F5F7] py-[80px] flex flex-col items-center gap-[50px]">


  <h1 className="text-[40px] font-bold text-center">
    <span className="text-[#2EA3F2]">Minimum</span> required{" "}
    <span className="text-[#2EA3F2]">laptop</span> for the course
  </h1>

  <div className="flex gap-[50px] items-center">

    <div className="w-[500px] h-[350px] bg-white rounded-3xl shadow-lg flex items-center justify-center">
      <img src={laptop} alt="" className="w-[300px]" />
    </div>

 
    <div className="flex flex-col gap-[20px]">


      <div className="flex gap-[20px]">

 
        <div className="w-[320px] bg-white rounded-2xl p-[20px] shadow-md flex gap-[15px]">
          <div className="w-[60px] h-[60px] bg-[#E9F3FB] rounded-xl flex items-center justify-center">
            ⚙️
          </div>
          <div>
            <h2 className="font-semibold text-[16px]">
              Intel Core i5 (10-го поколения)
            </h2>
            <p className="text-[#2EA3F2] text-[13px]">Processor</p>
          </div>
        </div>

   
        <div className="w-[320px] bg-white rounded-2xl p-[20px] shadow-md flex gap-[15px]">
          <div className="w-[60px] h-[60px] bg-[#E9F3FB] rounded-xl flex items-center justify-center">
            🖥️
          </div>
          <div>
            <h2 className="font-semibold text-[16px]">
              Windows 10, 64-бит
            </h2>
            <p className="text-[#2EA3F2] text-[13px]">Operating System</p>
          </div>
        </div>

      </div>

  
      <div className="flex gap-[20px]">

  
        <div className="w-[320px] bg-white rounded-2xl p-[20px] shadow-md flex gap-[15px]">
          <div className="w-[60px] h-[60px] bg-[#E9F3FB] rounded-xl flex items-center justify-center">
            💾
          </div>
          <div>
            <h2 className="font-semibold text-[16px]">
              8 ГБ
            </h2>
            <p className="text-[#2EA3F2] text-[13px]">
              Random Access Memory (RAM)
            </p>
          </div>
        </div>

   
        <div className="w-[320px] bg-white rounded-2xl p-[20px] shadow-md flex gap-[15px]">
          <div className="w-[60px] h-[60px] bg-[#E9F3FB] rounded-xl flex items-center justify-center">
            🗄️
          </div>
          <div>
            <h2 className="font-semibold text-[16px]">
              SSD 256 ГБ или HDD 512 ГБ
            </h2>
            <p className="text-[#2EA3F2] text-[13px]">Storage</p>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>




<h1 className='text-[40px] font-bold text-center py-[20px]'>Course program</h1>

      <div className='flex flex-col gap-[30px] justify-center items-center'>
    
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      1
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name1}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      2
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name2}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      3
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name3}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      4
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name4}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      5
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name5}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      6
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name6}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>
<div className="w-[60%] h-[100px] bg-[white] rounded-[20px] flex items-center justify-between px-[40px]">

  <div className="flex items-center gap-[25px]">

    <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E88C8] to-[#2FA4DA] rounded-[20px] flex items-center justify-center text-white text-[22px] font-bold">
      1
    </div>

    <h2 className="text-[24px] font-semibold text-[#2C3E50]">
    {e.name1}
    </h2>

  </div>

  <div className="text-[28px] text-gray-500">
    ⌄
  </div>

</div>

    
      </div>





      
<div className='flex justify-center py-[40px]'>



<div className="w-[80%] h-[400px] bg-[#E6EBF1] rounded-[30px] flex items-center justify-between px-[80px]">

  
  <div className="flex flex-col gap-[25px] max-w-[520px]">

   
    <h1 className="text-[48px] font-bold text-[#1E88C8]">
      Softclub Certificate
    </h1>


    <p className="text-[20px] text-[#2C3E50]">
      Will confirm that you have completed the course and help you find a job
    </p>


    <button className="w-[230px] h-[55px] border-2 border-[#1E88C8] text-[#1E88C8] rounded-full flex items-center justify-center gap-[10px] hover:bg-[#1E88C8] hover:text-white transition">

      Example certificate

      <span className="text-[20px]">→</span>

    </button>

  </div>



  <div className="flex items-center justify-center">
    <img
      src={certificate}
      alt="certificate"
      className="w-[420px] object-contain"
    />
  </div>

</div>

</div>


    </div>
  )
}

export default Pageid
