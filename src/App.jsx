import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import axios from 'axios'
import './App.css'
const App = () => {
  let url="http://localhost:3001/user"
  let [data,setdata]=useState([])

async function get() {
  try {
    let {data}=await axios.get(url)
    setdata(data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(()=>{
  get()
},[])

  return (
    <>
 {/* {
  open?<Card />:null
 }    */}



<table>
  <thead>
    <tr>
      <th><input  type="checkbox" /></th>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
      <th>STATUS</th>
      <th className='w-[300px]'>ACTION</th>
    </tr>
  </thead>
  <tbody>

{
  data.map((e,i)=>{
    return <tr key={i}>
   <td><input checked={e.status} type="checkbox" /></td>
   <td>{e.id}</td>
   <td>{e.name}</td>
   <td>{e.age}</td>
   <td className={`${e.status?"text-[green]":"text-[red]"}`}>{e.status?"Activ":"Inactive"}</td>
   <td className='w-[300px] flex gap-[40px] justify-center items-center'><button className='p-[12px] bg-red-500 text-[white] rounded-[5px]'>DELETE</button><button className='p-[12px] bg-blue-500 text-[white] rounded-[5px]'>EDITE</button></td>
    </tr>
  })
}


  </tbody>
  
  </table>  













{/*     
    <button onClick={()=>setopen((e)=>!e)} >Open</button>
     */}
    </>
  )
}

export default App
