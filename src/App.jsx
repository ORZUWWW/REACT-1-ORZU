import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './companents/Card'
import Div from './companents/div'

function App() {
  let data=[
    {
       id: "1",
      name: "C++ March 2026",
      time: "16:00 - 18:00",
      Date: "Mar 5, 2026-Apr 5,2026",
      student1: 9,
      student2: 16,
      namestudent: "Студент",
      filial: "Profsouz",
      Day: "ПН,ВТ,СР,ЧТ,ПТ,СБ",

    },
    {
      id: "2",
      name: "Api March 2026",
      time: "16:00 - 18:00",
      Date: "Mar 5, 2026-Apr 5,2026",
      student1: 10,
      student2: 15,
      namestudent: "Студент",
      filial: "Profsouz",
      Day: "ПН,ВТ,СР,ЧТ,ПТ,СБ",
    },
    {
       id: "3",
      name: "Python March 2026",
      time: "16:00 - 18:00",
      Date: "Mar 5, 2026-Apr 5,2026",
      student1: 12,
      student2: 12,
      namestudent: "Студент",
      filial: "Profsouz",
      Day: "ПН,ВТ,СР,ЧТ,ПТ,СБ",
    },
    {
       id: "4",
      name: "Java March 2026",
      time: "16:00-18:00",
      Date: "Mar 5, 2026-Apr 5,2026",
      student1: 12,
      student2: 13,
      namestudent: "Студент",
      filial: "Profsouz",
      Day: "ПН,ВТ,СР,ЧТ,ПТ,СБ",
    },
]
  return (
   <div>
      {/* <table>
    <thead>
      <tr>
      
      <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>ACTION</th>

      
      </tr>
      </thead>

    <tbody>
      {
      data.map((e,i)=>{
       return <Card key={i} name={e.name} age={e.age} id={e.id}
        />
      })
    }
    </tbody>
   </table> */}


{
data.map((e,i)=>{
       return <Div key={i} name={e.name} time={e.time} data={e.Date} student1={e.student1} student2={e.student2} filial={e.filial} day={e.Day} namestudent={e.namestudent}
        />
      })

}






   </div>
  )
}

export default App
