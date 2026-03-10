import React from 'react'

const Pagelogo = () => {
  return (
    <div className='flex gap-[50px] items-center px-[20px] mb-[100px] sm:text-[white] py-[20px] justify-between'>
      <img src="/src/assets/logo.svg" alt="" />
      <img className='sm:hidden block' src="/src/assets/proche.svg" alt="" />
      <div className='sm:flex gap-[30px] items-center hidden'>
        <p>ПРОДУКЦИЯ</p>
        <p>ПОСТАВЩИКАМ</p>
        <p>ВАКАНСИИ</p>
        <p>НОВОСТИ</p>
        <p>КОНТАКТЫ</p>
      </div>
      <div className='sm:flex hidden gap-[30px] items-center'>
        <h2>+7 (342) 250-08-88</h2>
        <h2>info@grdok.ru.</h2>
        <h1>RU</h1>
      </div>
    </div>
  )
}

export default Pagelogo
