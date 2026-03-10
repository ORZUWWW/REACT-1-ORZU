import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Page1text from './Components/page1.text'
import Btnsabz from './Components/Btnsabz'
import Pagelogo from './Components/Pagelogo'
import Card from './Components/Card'
import H1Page from './Components/H1Page'
import Page2 from './Components/Page2'
import Page3img from './Components/Page3img'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Img1 from "./assets/gru1.png"
import Img2 from "./assets/gru2.png"
import Img3 from "./assets/gru3.png"
import st from "./assets/stgreen.svg"
import bb from "./assets/bb.png"
import ll from "./assets/log.png"



function App() {
let kar=[
  {
    h2:"Водитель лесовоза",
    h3:"З.п. от 50 000 ₽",
    p:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. ",
    h4:"Подробнее",
    img:"./assets/stgreen.svg"
  },
  {
    h2:"Водитель лесовоза",
    h3:"З.п. от 50 000 ₽",
    p:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. ",
    h4:"Подробнее",
    img:"./assets/stgreen.svg"
  },
  {
    h2:"Водитель лесовоза",
    h3:"З.п. от 50 000 ₽",
    p:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. ",
    h4:"Подробнее",
    img:"./assets/stgreen.svg"
  }
]

let kar2=[
{
  img:Img1,
  name:"Вышли на международный рынок",
  about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
  data:"25.12.2021"
},
{
  img:Img2,
  name:"Вышли на международный рынок",
  about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
  data:"25.12.2021"
},
{
  img:Img3,
  name:"Вышли на международный рынок",
  about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
  data:"25.12.2021"
}
]


let daraht=[
{
  img:"/src/assets/d1.svg",
  name:"Латофлекс",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:1
},
{
  img:"/src/assets/d2.svg",
  name:"Фанера",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:2
},
{
  img:"/src/assets/d3.svg",
  name:"Брикеты топливные RUF",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:3
},
{
  img:"/src/assets/d4.svg",
  name:"Пиломатериалы",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:4
},
{
  img:"/src/assets/d5.svg",
  name:"Кроватные основания",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:5
},
{
  img:"/src/assets/d6.svg",
  name:"Уголь",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:6
},
{
  img:"/src/assets/d7.svg",
  name:"Саженцы",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:7
},
{
  img:"/src/assets/d8.svg",
  name:"Отходы производства",
  about:"Шпон березовый лущеный, ГОСТ 99-96В Смола марки КФМТ - 15, класс эмиссии Е0",
  id:8
},

]
  return (
   <div>
   
<div className='bgpage  pl-[40px] '>
<Pagelogo/>
<Page1text
 h1="Группа компаний Гремячинский ДОК"
 p="Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов" >
<Btnsabz name='Связаться с нами'/>
</Page1text>
</div>
<div className='bg-[#686868] py-[100px]'>
<H1Page h1="Продукция завода" p="Ниже представлен список нашей продукции. Получить дополнительную информацию, а также оставить заявку можно по контактам коммерческой службы." />

<div className='flex gap-[50px] flex-wrap justify-center '>
{
  daraht.map((e,i)=>{
    return <Card key={i}  img={e.img} name={e.name} about={e.about}/>
  })
}

</div>
  </div>

<h1 className='text-[40px] text-[#494B44] text-center font-bold mt-[80px]'>ОСНОВНАЯ ДЕЯТЕЛЬНОСТЬ</h1>
<Page2
 h1="Производство"
 p1="Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции. "
 p2="Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции."
 img1="/src/assets/p1.png"
 img2="/src/assets/p2.png" 
 img3="/src/assets/p3.png"
 img4="/src/assets/p4.png" />

<Page2
 h1="Питомник"
 p1="Задача лесопитомника – обеспечение посадочным материалом собственнойи сторонней лесозаготовки."
 p2="Питомник полностью покрывает потребности Пермского края в сеянцах сибирской ели. Общая площадь теплиц – 4800 м3, питомника – 15 Га. Потенциал – до 4 млн. сеянцев в год."
 img1="/src/assets/p11.png"
 img2="/src/assets/p22.png" 
 img3="/src/assets/p33.png"
 img4="/src/assets/p44.png" />

 <img className='w-[80%] m-auto my-[50px]' src="/src/assets/g1.png" alt="" />

<Page3img h1="География Поставок" img1="/src/assets/g22.svg" img2="/src/assets/g2.png" />

<Page3 h1="Сотрудничество" p="Предприятие постоянно потребляет различный ассортимент продуктов и услуг">

<Btnsabz name='Подробнее'/>

</Page3>


<div>
  <div className='flex sm:gap-[600px] border-b-1 pb-[10px] w-[90%] border-[#494B44] sm:w-[1200px] m-auto justify-center items-center '>
    <h1 className='text-[44px] text-[#494B44] font-bold'>Актуальные Вакансии</h1>
    <img src="../src/assets/sabzst.svg" alt="" />
  </div>
<div className='flex gap-[60px] flex-wrap justify-center my-[50px] '>
{
  kar.map((e,i)=>{
    return <Page4 key={i} h2={e.h2} h3={e.h3} p={e.p} h4={e.h4} img={e.img}  />    
  })
}
  </div>
</div>


<div className='sm:flex items-center justify-center hidden gap-[700px] my-[30px]'>
  <h1 className='text-[#494B44] font-bold text-[60px]'>Новости</h1>
  <div className='flex gap-[10px] items-center'>
    <img src={st} alt="" />
    <p className='text-[#0E9E2F] text-[24px] '>Читать все новости</p>
  </div>
</div>



<div className='flex gap-[60px] flex-wrap justify-center items-center'>
  {
    kar2.map((e,i)=>{
     return <Page5 key={i} img={e.img} name={e.name} about={e.about} data={e.data}/>
    })
  }
</div>

<img className='sm:w-[100%] my-[50px] sm:h-[700px] m-auto h-[200px] ' src={bb} alt="" />



<img className='w-[100%]' src={ll} alt="" />

   </div>

  )
}

export default App
