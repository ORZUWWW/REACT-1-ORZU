import React from 'react'
import logo1 from './logo1.svg'
import logo2 from './logo2.svg'
import g1 from './g1.png'
import g2 from './g2.png'
import g3 from './g3.png'
import g4 from './g4.png'
import Infokal from './infokal'
import Btnsabz from './btnsabz'
const Page3 = () => {
  return (
    <div className='bg-[white] rounded-[30px] p-[20px]'>
      <div className='flex justify-between items-center  py-[20px]'>
        <h1 className='text-[48px] font-bold'>Программа питания</h1>
        <div className='text-[#4D8F76] flex gap-[20px] items-center '>
          <img src={logo1} alt="" />
          <p>Каждый день новое меню</p>
        </div>
      </div>
        <div>
          <h3 className='text-[#493E3E] text-[25px] font-bold'>Калорийность</h3>
          <p style={{margin:"15px 0px"}} className='text-[#A98C64] text-[20px]'  >Норма калорий позволяет достигать цели. Как расчитать? На сайте есть калькулятор</p>
        </div>

<div style={{margin:"30px 0px"}} className='flex gap-[60px] justify-center items-center'>
<Infokal bg="bg-[white]" name="900 ккал" about="3 блюда"  />
<Infokal bg="bg-[#DFCCB7]" name="1 250 ккал " about="4 блюда"  />
<Infokal bg="bg-[white]" name="1 600 ккал" about="5 блюд"  />
<Infokal bg="bg-[white]" name="2 050 ккал" about="6 блюд"  />
<Infokal bg="bg-[white]" name="индивидуально" about=" подобрать"  />
</div>
<h3 className='text-[#493E3E] text-[25px] font-bold'>Продолжительность</h3>
<div style={{margin:"30px 0px"}}  className='flex gap-[60px] justify-center items-center'>
<Infokal bg="bg-[white]" name="Пробные 2 дня" about="за 2 900 ₽"  />
<Infokal bg="bg-[#DFCCB7]" name="1 неделя " about="1 700 ₽ в день"  />
<Infokal bg="bg-[white]" name="2 недели" about="1 600 ₽ в день"  />
<Infokal bg="bg-[white]" name="3 недели" about="1 520 ₽ в день"  />
<Infokal bg="bg-[white]" name="4 недели" about="1 450 ₽  в день"  />
</div>

<div className='flex gap-[30px]'>
  <p className='text-[#493E3E] w-[210px]'>Выберите, сколько дней  в неделю вы хотите питаться</p>
 <div style={{padding:"10px 10px"}} className='border border-[#DFCCB7] w-[144px] flex gap-[25px] text-center rounded-[30px] '>
  <p className='bg-[#DFCCB7] rounded-[50%] w-[38px] h-[30px] text-center'>5</p>
  <p>6</p>
  <p>7</p>
 </div>
</div>

<div style={{margin:"30px 0px"}} className='flex gap-[30px] items-center'>
  <Btnsabz name="понедельник" bg="bg-[white]" cl="text-[black]" w="w-[190px]" br="#DFCCB7" b="border-1" />
  <Btnsabz name="вторник" bg="bg-[white]" cl="text-[black]" w="w-[190px]" br="#DFCCB7" b="border-1" />
  <Btnsabz name="четверг" bg="bg-[white]" cl="text-[black]" w="w-[190px]" br="#DFCCB7" b="border-1" />
  <Btnsabz name="пятница" bg="bg-[#DFCCB7]" cl="text-[black]" w="w-[190px]" br="#DFCCB7" b="border-1" />
  <Btnsabz name="суббота" bg="bg-[white]" cl="text-[black]" w="w-[190px]" br="#DFCCB7" b="border-1" />
  <Btnsabz name="воскресенье" bg="bg-[white]" cl="text-[black]" w="w-[190px]" br="#DFCCB7" b="border-1" />
</div>

<div className='flex gap-[120px] justify-center items-center'>

<div className='w-[245px]'>
  <img className='w-[225px]' src={g1} alt="" />
  <p style={{margin:"10px 0px"}} className='text-[#A98C64] text-[18px]'>Завтрак 300 гр</p>
  <h2 className='text-[#493E3E] font-bold'>Геркулес с зелёным яблоком  и семенами льна </h2>
</div>

<div className='w-[245px]'>
  <img className='w-[225px]' src={g2} alt="" />
  <p style={{margin:"10px 0px"}} className='text-[#A98C64] text-[18px]'>Ланч 160 гр</p>
  <h2 className='text-[#493E3E] font-bold'>Дольки яблок в клюквенном маринаде</h2>
</div>

<div className='w-[245px]'>
  <img className='w-[225px]' src={g3} alt="" />
  <p style={{margin:"10px 0px"}} className='text-[#A98C64] text-[18px]'>Обед 275 гр</p>
  <h2 className='text-[#493E3E] font-bold'>Рагу из морепродуктов</h2>
</div>

<div className='w-[245px]'>
  <img className='w-[225px]' src={g4} alt="" />
  <p style={{margin:"10px 0px"}} className='text-[#A98C64] text-[18px]'>Ужин 415 гр</p>
  <h2 className='text-[#493E3E] font-bold'>Гречневая каша с куриным филе</h2>
</div>

</div>

<div style={{padding:"30px 10px",margin:"20px 0px"}} className='bg-[#A2BE95] text-[white] flex gap-[90px] rounded-[30px] items-center justify-center'>
  <div>
    <Btnsabz bg="bg-[#4D8F76]" cl="text-[white]" w="w-[338px]"  name="Заказать 10 дней питания за 16 000 ₽" />
    <p style={{margin:"10px 0px",fontSize:"20px"}} >1 250 ккал за 1 600 ₽ в день</p>
  </div>
<div className='flex gap-[40px]'>
  <img src={logo2} alt="" />
  <div className='w-[600px]'>
    <h1 className='text-[25px]'>Будем доставлять наборы каждый день.</h1>
    <p className='text-[20px]'>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа.</p>
  </div>
</div>



</div>


    </div>
  )
}

export default Page3
