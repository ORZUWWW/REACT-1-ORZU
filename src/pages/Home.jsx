import React, { useState } from 'react'
import { useNavigate } from 'react-router';
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






const Home = () => {
let [kurs,setkurs]=useState("All")
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
      kurs: "Design",
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



  
  let navigate=useNavigate()
  let productid=(id)=>{
    navigate(`product/${id}`)
  }

  return (
    <div className='bg-[#0F172A]'>



<div className='flex flex-col justify-center items-center text-center'>
  <h1 className='text-[40px] text-[white] font-bold pb-[20px]'>Academy Courses</h1>
  <p className='text-[white] text-[18px] w-[50%]'>Choose your learning path and build skills in Frontend, Backend, Mobile development, or start with our Kids program</p>
</div>
<div className='flex justify-center gap-[20px]'>
<button onClick={()=>setkurs("All")} className='bg-[white] p-[10px] w-[130px]  rounded-3xl text-[black]'>All</button>
<button onClick={()=>setkurs("Frontend")} className='bg-[#161F2D] p-[10px] w-[130px] rounded-3xl text-[#b5afaf]'>Frontend</button>
<button onClick={()=>setkurs("Backend")} className='bg-[#161F2D] p-[10px] w-[130px] rounded-3xl text-[#b5afaf]'>Backend</button>
<button onClick={()=>setkurs("Mobile")} className='bg-[#161F2D] p-[10px] w-[130px] rounded-3xl text-[#b5afaf]'>Mobile</button>
<button onClick={()=>setkurs("Kids")} className='bg-[#161F2D] p-[10px] w-[130px] rounded-3xl text-[#b5afaf]'>Kids</button>
<button onClick={()=>setkurs("Olympiad")} className='bg-[#161F2D] p-[10px] w-[130px] rounded-3xl text-[#b5afaf]'>Olympiad</button>
<button onClick={()=>setkurs("Design")} className='bg-[#161F2D] p-[10px] w-[130px] rounded-3xl text-[#b5afaf]'>Design</button>

</div>

<div className="w-full flex flex-wrap justify-center gap-[30px]  p-[40px]">

  {data.filter((e)=>kurs=="All"||e.kurs==kurs)
  .map((e) => (
    <div onClick={()=>productid(e.id)} key={e.id} className="w-[420px] h-[230px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer rounded-[25px] p-[25px]  flex flex-col justify-between relative overflow-hidden" style={e.bg}>

      <div className="flex flex-col gap-[10px]">

        <h1 className="text-white text-[26px] font-bold">
          {e.name}
        </h1>

        <p className="text-white/70 text-[15px] w-[80%]">
          {e.minabout}
        </p>

      </div>


      <div className="flex items-center gap-[10px]">

   
        <div className="px-[12px] py-[5px] rounded-full bg-black/30 text-[14px] text-white flex items-center gap-[6px]">
          ⏱ {e.data}
        </div>


        <p className="text-white/60 text-[14px]">
          {e.kurs}
        </p>

      </div>

      <div className="absolute top-[20px] right-[20px] w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center">

        <img src={e.img} alt="" className="w-[35px]" />

      </div>

    </div>
  ))}

</div>










      </div>
  )
}

export default Home
