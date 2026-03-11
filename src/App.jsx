import { useState } from 'react'
import viteLogo from '/vite.svg'
import logo from './image/logo.svg'
import logo1 from './image/logo1.svg'
import i1 from './image/i1.png'
import i2 from './image/i2.png'
import p1 from './image/p1.svg'
import p2 from './image/p2.svg'
import p3 from './image/p3.svg'
import imob from './image/surat.png'
import aa from './image/aa.png'
import an from './image/andrey.png'

import g1 from './image/g1.svg'
import g2 from './image/g2.svg'
import g3 from './image/g3.svg'
import g4 from './image/g4.svg'
import g5 from './image/g5.svg'
import g6 from './image/g6.svg'
import f1 from './image/f1.svg'
import f2 from './image/f2.svg'
import f3 from './image/f3.svg'
import h1 from './image/h1.svg'
import h2 from './image/h2.svg'
import h3 from './image/h3.svg'
import h4 from './image/h4.svg'
import h5 from './image/h5.svg'
import hi1 from './image/hi1.svg'
import hi2 from './image/hi2.svg'
import hi3 from './image/hi3.svg'
import hi4 from './image/hi4.svg'
import a1 from './image/a1.svg'
import a2 from './image/a2.svg'
import a3 from './image/a3.svg'
import a4 from './image/a4.svg'
import a5 from './image/a5.svg'
import a6 from './image/a6.svg'
import a7 from './image/a7.svg'
import a8 from './image/a8.svg'

import p11 from './image/p113.svg'
import p22 from './image/p213.svg'
import p33 from './image/p313.svg'
import oea from './image/oea.svg'
import sot from './image/sot.svg'
import ox from './image/bgox.png'
 

import './App.css'
import Page1 from './components/Page1'
import Page1revers from './components/Page1revers'
import Page2 from './components/Page2'
import Page3pa from './components/Page3pa'
import Btngra from './components/Btngra'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import H1page from './components/H1page'
import Imgob from './components/Imgob'
import Page6 from './components/Page6'
import Page61 from "./components/Page6m"
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import Page9 from './components/Page9'
import Page10 from './components/Page10'
import Page11 from './components/Page11'
import Page12 from './components/Page12'
import Bg4 from './components/Bg4'
import Page13 from './components/Page13'






function App() {
let masiv1=[
  {
    name:"Аналитические исследования",
    p:"Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации",
    img:i1
  }
]
let masiv2=[
  {
    name:"Онлайн акселератор для IT бизнеса",
    p:"Онлайн программа аскелерации IT бизнеса позволит вашей команде открыть новые горизонты и возможности для бизнеса на глобальных рынках. В результате программы вы получите возможность презентовать свой проект для международных инвесторов и локальных партнеров",
    img:i2
  }
]

let page2m1=[
  {
    num:"01",
    name:"IT проекты на стадии идеи",
    about:"Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
  },
  {
    num:"02",
    name:"Инновационный бизнес",
    about:"Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
  },
  {
    num:"03",
    name:"Корпорации",
    about:"Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
  },
]

let page5=[
  {
    h1:"Месяца обучения",
    img:p1,
  },
  {
    h1:"Приглашенные эксперты",
    img:p2,
  },
  {
    h1:"Персональный менеджер",
    img:p3,
  }
]

let page7m1=[
  {
    num:"01",
    name:"Документы по продукту",
    about:"Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
  },
  {
    num:"02",
    name:"Обратная связь от рынка",
    about:"Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
  },
  {
    num:"03",
    name:"Продвижение продукта",
    about:"Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
  },
  {
    num:"04",
    name:"Подписка на отчеты",
    about:"Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
  },
  {
    num:"05",
    name:"Подписка на отчеты",
    about:"Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
  },
  {
    num:"06",
    name:"Подписка на отчеты",
    about:"Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
  },
]

let hi=[
  {
    img:hi1,
    name:"Юрий Ким",
    about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
  },
  {
    img:hi2,
    name:"Эшли Абрамс",
    about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
  },
  {
    img:hi3,
    name:"Фатими Юсуф",
    about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
  },
  {
    img:hi4,
    name:"Майкл Донован",
    about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
  },
]

let Page12img=[
  {
    img:a1
  },
  {
    img:a2
  },
  {
    img:a3
  },
  {
    img:a4
  },
  {
    img:a5
  },
  {
    img:a6
  },
  {
    img:a7
  },
  {
    img:a8
  },
]

let mena=[
  {
   img:p11,
   h1:"Новый отчет по MENA",
   p:"Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)",
   data:"22.11.2022"
  },
  {
   img:p22,
   h1:"Новый отчет по MENA",
   p:"Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)",
   data:"22.11.2022"
  },
  {
   img:p33,
   h1:"Новый отчет по MENA",
   p:"Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)",
   data:"22.11.2022"
  }
]


  return (
<div>

  <div className='bg1 pb-[100px] lg:pb-[200px]'>
    <div className='flex lg:gap-[207px] justify-center items-center gap-[30px] text-[white] py-[20px]'>
      <img src={logo} alt="" />
      <div className='md:flex lg:gap-[50px] gap-[40px] md:text-[16px] lg:text-[18px]  items-center hidden lg:flex '>
        <p>Кто мы?</p>
        <p>Услуги</p>
        <p>Акселератор</p>
        <p>Новости</p>
      </div>
      <div className='flex gap-[30px]'>
      <button className='bg-[#07AF91] p-[15px] rounded-[5px] lg:w-[130px] md:w-[130px]  text-[14px]'>Войти</button>
      <img className='md:hidden lg:hidden block' src={logo1} alt="" />
      </div>
    </div>

<div className='lg:w-[780px] text-[white] lg:ml-[200px] lg:mt-[100px] lg:text-start text-center md:mt-[50px] mt-[30px]'>
  <h1 className='lg:text-[43px] md:lg:text-[43px] text-[24px] font-bold '>Запустите
    <br /> 
<span className='bg-[#07AF91] p-[5px] '>технологический IT-бизнес </span>
<br />
на международных рынках</h1>

<h2 className='lg:text-[34px] md:text-[34px] text-[16px] my-[20px]'>Открыт набор заявок на акселератор  <span className='bg-[white] w-[102px] text-[#07AF91] text-[18px] lg:hidden p-[10px] rounded-[10px]'>15.12.2022</span> </h2>
<button className='bg-gradient-to-l from-[#016CA8] to-[#61B5E4] w-[200px] p-[15px] rounded-[10px]'>Подать заявку</button>
</div>

  </div>


<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  lg:pl-[125px] mt-[40px] md:text-start md:ml-[30px]  font-bold text-center'>Наши услуги</h1>

  {
    masiv1.map((e,i)=>{
      return <Page1 key={i} name={e.name} p={e.p} img={e.img} />
    })
  }
  {
    masiv2.map((e,i)=>{
      return <Page1revers key={i} name={e.name} p={e.p} img={e.img} />
    })
  }
<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  lg:pl-[70px] mt-[40px]  font-bold md:text-start md:ml-[30px]  text-center'>Для кого мы?</h1>

<div className='flex gap-[100px] justify-center flex-wrap items-center py-[50px]'>

  {
    page2m1.map((e,i)=>{
      return <Page2 key={i} num={e.num} name={e.name} about={e.about} />
    })
  }

  </div>

<div className='bg2 my-[60px]'>

<Page3pa h1="Научитесь исследовать иностранные рынки и откройте новые возможности для своего бизнеса" p="Мы предлагаем широкий спектр услуг для развития вашего IT-бизнеса на международных рынках.">


<Btngra name="Получить консультацию" w="w-[310px]" />

</Page3pa>


</div>
<Page4/>



<H1page h1="Об акселераторе IT бизнеса" p="Программа акселератора расчитана на 8 недель интенсивного онлайн  курса с вебинарами приглашенных экспертов по международным рынкам, разборами ваших идей и проектов " />

<div className='flex flex-wrap justify-center gap-[30px] my-[50px]'>
{
  page5.map((e,i)=>{
    return <Page5 key={i} h1={e.h1} img={e.img} />
  } )
}
</div>

<Imgob img={imob} />
<Page6 >

<Page61 
  name="Модуль 2"
  about="Стартап подход к созданию международного IT продукта"
/>
<Page61 
  name="Модуль 3"
  about="Бизнес моделирование и поиск Product Market Fit"
/>
<Page61 
  name="Модуль 4"
  about="Определение рынка, поиск и исследование Целевой аудитории"
/>
<Page61 
  name="Модуль 5"
  about="Что такое MVP и почему это важно"
/>
<Page61 
  name="Модуль 6"
  about="Что такое дорожная карта продукта?"
/>
<Page61 
  name="Модуль 7"
  about="Документы дя международных инвесторов"
/>
<Page61 
  name="Модуль 8"
  about="Открытие юридического лица. Возможности для стартапов"
/>
<Page61 
  name="Демо день "
  about=""
/>
<div className='lg:pl-[208px] pl-[22px]'>
<Btngra  name="Получить полную программу" w="w-[277px]" />
</div>
</Page6>



<div className='bg3 flex lg:gap-[125px] justify-center items-center lg:flex-row flex-col '>

<div className='lg:w-[556px] w-[331px] md:w-[556px]'>
  <h1 className='lg:text-[40px] lg:block md:hidden block text-[white] text-center lg:text-start  font-bold   md:text-[30px] text-[24px] '>Попадите на радары инвесторов и партнеров</h1>
  <p className='text-[white] lg:text-[18px]  lg:text-start text-center text-[16px] md:text-[18px] my-[15px]'>В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках</p>
   <button className='bg-[#07AF91] md:ml-[90px] lg:ml-0 p-[15px] rounded-[5px] text-[white] w-[326px] text-[22px]'>Записаться</button>
</div>
<div className='flex flex-wrap lg:w-[440px] md:w-[440px]  w-[260px] '>
  <img className='lg:w-[205px] md:w-[205px] w-[102px]' src={g2} alt="" />
  <img className='lg:w-[205px] md:w-[205px] w-[102px]' src={g3} alt="" />
  <img className='lg:w-[205px] md:w-[205px] w-[102px]' src={g4} alt="" />
  <img className='lg:w-[205px] md:w-[205px] w-[102px]' src={g1} alt="" />
  <img className='lg:w-[205px] lg:block md:hidden block md:w-[205px] w-[102px]' src={g5} alt="" />
  <img className='lg:w-[205px] md:w-[205px] w-[102px] lg:block md:hidden block ' src={g6} alt="" />
</div>

<div>

</div>


</div>

<div className='flex gap-[60px] justify-center flex-wrap items-center py-[50px]'>

  {
    page7m1.map((e,i)=>{
      return <Page2 key={i} num={e.num} name={e.name} about={e.about} />
    })
  }

  </div>


<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  lg:pl-[70px]  font-bold mt-[40px] md:text-start md:ml-[30px]  text-center'>Стоимость</h1>
<div className="flex flex-col lg:flex-row gap-[30px] justify-center items-center py-[60px]">

      <Page7
        img={f1}
        h2="Анализ международных рынков"
        h3="Что входит в отчет?"
        p="$1 000"
      />

      <Page7
        img={f2}
        h2="Упаковка стартапа под локальные рынки"
        h3="Что входит в услугу?"
        p="$1 000"
      />

      <Page7
        img={f3}
        h2="Акселератор вашего бизнеса рынки"
        h3="Что входит в акселератор?"
        p="$1 000"
      />
    </div>

<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  font-bold  lg:pl-[70px] mt-[40px] md:text-start md:ml-[30px]  text-center'>Кто мы?</h1>

<Page8 img={aa} span="INNOMA.VC" p2="Наша команда состоит из профессионалов своего дела и основной нашей целью является помощь IT компаниям получить необходимые знания и пакеты документов, чтобы успешно запустить свой продукт на международных рынках. " p1="-  Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки." />


<Page9 img={an} name="Всем привет!" h2="Роман Гайн" h3="Основатель INNOMA.VC" p="Меня зовут Роман. Последние 6 лет я являюсь частью 
инновационной экосистемы СНГ,  прошел путь от проектного 
менеджера до руководителя продукта по автоматизированному скаутингу и скорингу стартапов. За 6 лет работы я увидел  множество ошибок и отсутствие ориентации акселерационных программ под запросы стартапов. Все акселераторы выполнялись ради акселераторв и выполнения КПЭ. " />



<Page10 img1={h1} img2={h2} img3={h3} img4={h4} img5={h5}  />







<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  font-bold  lg:pl-[100px] mt-[40px] md:text-start md:ml-[140px]  text-center'>Эксперты и трекеры программы</h1>
<div className='flex lg:flex-row lg:gap-[50px] md:gap-[80px] md:flex-row md:flex-wrap flex-col my-[40px] justify-center items-center'>
  {
    hi.map((e,i)=>{
      return <Page11 key={i} img={e.img} name={e.name} about={e.about} />
    })
  }
  </div>
<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  font-bold  lg:pl-[0px] mt-[40px] md:text-start md:ml-[140px]  text-center'>Наши партнеры</h1>





<div className='flex flex-wrap lg:gap-[30px] md:gap-[60px] gap-[20px] justify-center my-[30px]'>
{
  Page12img.map((e,i)=>{
    return <Page12 key={i} img={e.img} />
  })
}

</div>

<Bg4 h1="Мы создаем международное сообщество экспертов и партнеров" p="Если вы или ваш бизнес может быть полезен IT  командам при выходе на международные рынки,  приглашем вас стать нашим партнером">
<Btngra name="Стать партнером" w="w-[320px]" />
</Bg4>















<h1 className='text-[#1178B2] lg:text-[36px] text-[30px]  font-bold  lg:pl-[104px] mt-[40px] md:text-start md:ml-[50px]  text-center'>Мероприятия и события</h1>




<div className='flex gap-[20px] justify-center items-center flex-wrap my-[50px]'>

{
  mena.map((e,i)=>{ 
    return <Page13 key={i} img={e.img} h1={e.h1} p={e.p} data={e.data} />
  })
}

  </div>






<div className='bg3 flex justify-center items-center lg:flex-row lg:gap-[150px] gap-[30px] md:flex-col flex-col'>
  <div className='lg:w-[466px] md:w-[415px] w-[270px]'>
    <h1 className='text-[white] lg:text-[36px] text-[30px] md:text-[32px] text-[24px] font-bold lg:text-start  text-center'>Остались вопросы?</h1>
<p className='text-[14px] text-[white] md:text-[16px] lg:text-[18px]'>Оставьте заявку и наша команда свяжется с вами</p>


<img className='lg:mt-[100px] lg:block hidden' src={sot} alt="" />

  </div>



      <div className="bg-white w-full max-w-[600px] rounded-[10px] shadow-2xl shadow-[#00000040] p-[40px]">
        <input type="text" placeholder="Имя" className="w-full border-b py-[15px] outline-none text-[16px]"
        />
        <input type="email" placeholder="Почта" className="w-full border-b py-[15px] outline-none text-[16px]" />
        <div className="flex items-center gap-[10px] border-b py-[15px]">
          <span className="text-gray-500">(971)</span>
          <span><img src={oea} alt="" /></span>
          <input type="text" className="outline-none flex-1" placeholder="Телефон"
            />
        </div>
        <button className="mt-[30px] bg-[#07AF91] text-white px-[40px] py-[14px] rounded-[10px] text-[16px]">Оставить заявку</button>
      </div>

            </div>




<div className='text-[white] bg5 flex  justify-center mt-[100px] items-center lg:gap-[240px] md:gap-[30px] gap-[10px]'>

<div>
  <img src={logo} alt="" />
  <p>Все права защищены</p>
</div>

<div className=' gap-[30px] md:flex lg:flex hidden'>
  <p>Кто мы?</p>
  <p>Услуги</p>
  <p>Акселератор</p>
  <p>Новости</p>
</div>
<div className=''>
  <p>Dubai, Single Business Tower <br /> 1503, Business Bay</p>
  <p className='mt-[10px] border-b w-[130px]'>Sales@innoma.vc</p>
</div>

</div>




</div>

  )
}

export default App
