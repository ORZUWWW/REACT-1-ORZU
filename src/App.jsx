import React from 'react'
import Logo from './components/logo'
import Page1 from './components/1'
import Page2 from './components/2'
import Page3 from './components/3'
import Page11 from './components/Page11'
import Page1img from './components/Page1img'
import Btnsabz from './components/btnsabz'
const App = () => {
  return (
    <div className='bg-[#FAF6F2]'>

<Logo/>
<Page1>

  <Page11/>
  <Page1img />
  </Page1>
  <Page2>
       <Btnsabz name="Ж  М" cl="text-[black]" w="w-[86px]" bg="bg-[#FAF6F2]"  />
       <Btnsabz name="Ваш вес" cl="text-[black]" w="w-[91px]" bg="bg-[#FAF6F2]"  />
       <Btnsabz name="Ваш рост" cl="text-[black]" w="w-[100px]" bg="bg-[#FAF6F2]"  />
       <Btnsabz name="Ваш возраст" cl="text-[black]" w="w-[124px]" bg="bg-[#FAF6F2]"  />
       <Btnsabz name="Активность" cl="text-[black]" w="w-[186px]" bg="bg-[#FAF6F2]"  />
      <Btnsabz name="Выберите цель" cl="text-[black]" w="w-[190px]" bg="bg-[#FAF6F2]"  />
       <Btnsabz name="Рассчитать рацион" cl="text-[white]" w="w-[208px]" bg="bg-[#4D8F76]"  />
  </Page2>
<Page3/>


    </div>
  )
}

export default App
