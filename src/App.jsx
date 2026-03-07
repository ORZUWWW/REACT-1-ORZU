import React from 'react'
import Page1 from './page1'
import logo from './logo.svg'
import logo2 from './logo2.svg'
import vxod from './vxod.svg'
import bolee from './bolee.svg'
import ozon from './ozon.svg'
import ozonpage from './ozon.png'
import f1 from './f1.png'
import f2 from './f2.png'
import table from './table.png'
import nukta from './nkta.svg'
import xola from './xola.png'
import bud from './budilnik.png'
import xola3 from './xola3.png'
import bud3 from './budilnik3.png'
import xola2 from './xola2.png'
import bud2 from './budilnik2.png'
import gal from './gal.svg'
import d6 from './d6.png'
import l5 from './l5.svg'
import l2 from './l2.svg'
import l1 from './l1.svg'
import l3 from './l3.svg'
import l4 from './l4.svg'
import l6 from './l6.svg'
import dal from './dal.svg'
import iks from './iks.svg'



import './App.css';

const App = () => {
  return (
    <div>
     <div className='dbolo1'>
      <div className='dbolo11' style={{display:"flex",gap:"30px"}}>
      <img src={logo} />
      <img className='dv1' src={logo2} />
      </div>
      <div className='dbolo2' style={{display:"flex",gap:"30px",alignItems:"center"}}>
        <h2 style={{color:"#212121",fontSize:"18px"}}>О нас</h2>
        <h2 style={{color:"#212121",fontSize:"18px"}}>Возможности</h2>
        <h2 style={{color:"#212121",fontSize:"18px"}}>Контакты</h2>
      </div>
      <div>
        <div className='dbolo3' style={{display:"flex",gap:"30px",alignItems:"center"}}>
          <img src={vxod} />
          <img className='ipro' src={bolee} />
          <h2 className='dv1'>Вход</h2>
          <button className='dv1' style={{ background: "linear-gradient(90deg, #11AE88, #2A84EE)",padding:"10px 20px",border:"none",borderRadius:"20px",color:"white",cursor:"pointer",fontSize:"17px"}}>Зарегистрироваться</button>
        </div>
      </div>

     </div>

     <div className='div2'>
<div className='d2'>
<h1 ><span style={{color:"#2EB897"}}>Внутренняя аналитика</span> и <span style={{color:"#2A84EE"}}>финансовый учёт</span> для бизнеса на маркетплейсах   <img src={ozon} /></h1>
<p style={{color:"#6C778E"}}>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
<img className='f1img' src={f1} />
<img className='f2img' src={f2} />
</div>
<img className='ozonpage' src={ozonpage} />




     </div>

<div className='div3'>
<div className='div3page'>
  <h1>777</h1>
  <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
</div>
<div className='div3page'>
  <h1>5</h1>
  <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
</div>
<div className='div3page'>
  <h1>100 000</h1>
  <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
</div>


</div>
<h1 className='h11'>Возможности сервиса</h1>
<div className='div4'>
<div className='div4h1'>
  <h2 style={{color:"black",}}>Финансовая аналитика</h2>
  <h2>Товарная аналитика</h2>
  <h2>Аналитика внутренней рекламы</h2>
  <h2>Статистика</h2>
  <h2>Инструменты</h2>
</div>

<div className='div4pageob'>
  

<div className='div4page'>
<div className='div4page1'>
  <h1>Инструменты для финансовой аналитики</h1>
  <div style={{display:"flex",gap:"15px"}}>
    <img src={nukta} />
    <h3 style={{color:"#6C778E",fontSize:"22px"}}>Отчёт о прибылях и убытках (P&L)</h3>
  </div>
</div>
<div className='div4page1'>
  <div style={{display:"flex",gap:"15px"}}>
    <img src={nukta} />
    <h3 style={{color:"#6C778E",fontSize:"22px"}}>Отчёт о прибылях и убытках (P&L)</h3>
  </div>
</div>
<div className='div4page1'>
  <div style={{display:"flex",gap:"15px"}}>
    <img src={nukta} />
    <h3 style={{color:"#6C778E",fontSize:"22px"}}>Журнал операций</h3>
  </div>
</div>
<div className='div4page1'>
  <div style={{display:"flex",gap:"15px"}}>
    <img src={nukta} />
    <h3 style={{color:"#6C778E",fontSize:"22px"}}>Сводка продаж</h3>
  </div>
</div>
<div className='div4page1'>
  <div style={{display:"flex",gap:"15px"}}>
    <img src={nukta} />
    <h3 style={{color:"#6C778E",fontSize:"22px"}}>Учёт самовыкупов</h3>
  </div>
</div>

<button className='dv1' style={{ background: "linear-gradient(90deg, #11AE88, #2A84EE)",padding:"13px 50px",border:"none",borderRadius:"20px",color:"white",cursor:"pointer",fontSize:"20px",marginTop:"15px"}}>Зарегистрироваться</button>



</div>

<img src={table} />

</div>


</div>

<div className='div5'>
<div className='div5page'>
  <h1>Начните экономить своё время</h1>
  <p>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
  <div className="subscribe">
  <input type="email" placeholder='Введите ваш email' />
  <button>Попробовать</button>
</div>
</div>
<img className='xolaimg' src={xola} />
<img className='budimg' src={bud} />

</div>

<div className='div6'>
<div className='div6page'>
<h1>Собираем единые отчёты по всем вашим магазинам</h1>
<h3>C Mpassistant вы сможете:</h3>
<div className='div6page1'>
  <img src={gal} alt="" />
  <p>Сможете видеть прибыль по всем магазинам и маркетплейсам в одном месте</p>
</div>
<div className='div6page1'>
  <img src={gal} alt="" />
  <p>Не потратите время на сбор данных из нескольких кабинетов или маркетплейсов</p>
</div>
<div className='div6page1'>
  <img src={gal} alt="" />
  <p>Добавите любое количество магазинов</p>
</div>

</div>
<img className='d6img' src={d6} />


</div>

<h1 className='h111'>Почему выбирают Mpassistant</h1>


<div className='div7'>

  
<div className='div7page'>
  <div className='div7page1'>
    <img src={l1} alt="" />
    <h2>Точность данных</h2>
  </div>
  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
</div>

<div className='div7page'>
  <div className='div7page1'>
    <img src={l2} alt="" />
    <h2>Большой функционал</h2>
  </div>
  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
</div>

<div className='div7page'>
  <div className='div7page1'>
    <img src={l3} alt="" />
    <h2>Лёгкость освоения</h2>
  </div>
  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
</div>

<div className='div7page'>
  <div className='div7page1'>
    <img src={l4} alt="" />
    <h2>Подходит всем</h2>
  </div>
  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
</div>

<div className='div7page'>
  <div className='div7page1'>
    <img src={l5} alt="" />
    <h2>Конфиденциальность</h2>
  </div>
  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
</div>

<div className='div7page'>
  <div className='div7page1'>
    <img src={l6} alt="" />
    <h2>Служба заботы</h2>
  </div>
  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
</div>




</div>


<div className='div5'>
<div className='div5page'>
  <h1>Попробуйте бесплатно</h1>
  <p>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
  <div className="subscribe">
  <input type="email" placeholder='Введите ваш email' />
  <button>Попробовать</button>
</div>
</div>
<img className='xolaimg x' src={xola2} />
<img className='budimg b' src={bud2} />

</div>

<h1 className='h111'>Выберите тариф</h1>

<div className='div8'>
<div className='div8btn'>
<button className='btn1'>1 месяц</button>
<button className='btn2'>3 месяц</button>
<button className='btn2'>6 месяц</button>
<button className='btn2'>12 месяц</button>
</div>

<div className='div8page'>
<div className='div8page1'>
<h1>Стартовый </h1>
<p>0 ₽</p>
<h2>4 990 ₽</h2>
 <button className='dv1 dd' style={{ background: "linear-gradient(90deg, #11AE88, #2A84EE)",padding:"10px 20px",border:"none",borderRadius:"20px",color:"white",cursor:"pointer",fontSize:"17px"}}>Зарегистрироваться</button>
 <button className='btndd'>Подробнее <img src={dal} /></button>
</div>
<div className='div8page1'>
<h1>Стартовый +</h1>
<p>4 491 ₽/мес</p>
<h2>13 473 ₽</h2>
 <button className='dv1 dd' style={{ background: "linear-gradient(90deg, #11AE88, #2A84EE)",padding:"10px 20px",border:"none",borderRadius:"20px",color:"white",cursor:"pointer",fontSize:"17px"}}>Зарегистрироваться</button>
 <button className='btndd'>Подробнее <img src={dal} /></button>
</div>
<div className='div8page1'>
<h1>Профи</h1>
<p>4 241 ₽/мес</p>
<h2>25 446 ₽</h2>
 <button className='dv1 dd' style={{ background: "linear-gradient(90deg, #11AE88, #2A84EE)",padding:"10px 20px",border:"none",borderRadius:"20px",color:"white",cursor:"pointer",fontSize:"17px"}}>Зарегистрироваться</button>
 <button className='btndd'>Подробнее <img src={dal} /></button>
</div>



</div>


</div>


<div className='div5 div9'>
<div className='div5page'>
  <h1>Начинающим селлерам с выручкой</h1>
  <p>до 200 000 ₽/мес</p>
  <h2>Бесплатно</h2>
   <button className='dv1 dd' style={{ background: "linear-gradient(90deg, #11AE88, #2A84EE)",padding:"10px 20px",border:"none",borderRadius:"20px",color:"white",cursor:"pointer",fontSize:"17px"}}>Зарегистрироваться</button>
 <button className='btndd'>Подробнее <img src={dal} /></button>
</div>
<img className='xolaimg xx' src={xola3} />
<img className='budimg bb' src={bud3} />

</div>

    </div>
  )
}

export default App
