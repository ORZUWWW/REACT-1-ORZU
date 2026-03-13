import React, { useState } from 'react'
import './App.css'
const App = () => {
  let [editname,seteditname]=useState("")
  let [editage,seteditage]=useState("")
  let [idx,setidx]=useState(null)
  let [sear,setsear]=useState("")
  let [sel,setsel]=useState("")
  let [editstatus,setstatus]=useState(null)
  let [data,setdata]=useState([
    {
      name:"ORZU",
      age:21,
      status:true,
      id:1
    },
    {
      name:"Azim",
      age:11,
      status:false,
      id:2
    },
    {
      name:"Soleh",
      age:16,
      status:false,
      id:3
    },
    {
      name:"Muhammad",
      age:18,
      status:true,
      id:4
    },
    // {
    //   name:"Bilol",
    //   age:22,
    //   status:true,
    //   id:5
    // },
    // {
    //   name:"Tolibov",
    //   age:11,
    //   status:false,
    //   id:6
    // },
    // {
    //   name:"Abdullo",
    //   age:19,
    //   status:false,
    //   id:7
    // },


  ])


let addiser=((e)=>{
  e.preventDefault()
  let obj={
    name:e.target["inpname"].value,
    age:e.target["inpage"].value,
    status:true,
    id:data.length+1
  }
  setdata([...data,obj])
})

let show=(e)=>{
  seteditname(e.name)
  seteditage(e.age)
  setidx(e.id)
  setstatus(e.status)
}


let edit=(e)=>{
   e.preventDefault()
   let newdata=data.map(((e)=>{
    if(e.id==idx){
      e={
        name:editname,
        age:editage,
        status:editstatus,
        id:idx
      }
    }
    return e
   }))

   setdata(newdata)
}

let del=(id)=>{
  let newdata=data.filter(((e)=>e.id!=id))
  setdata(newdata)
}

let ch=(id)=>{
  let newdata=data.map(((e)=>{
    if(e.id==id){
      return {
        status:!e.status,
        name:e.name,
        age:e.age,
        id:e.id,
      }
    }
    return e
  }))
  setdata(newdata)
}



  return (
    <>

<div className='flex gap-[100px] justify-center items-center card ml-[170px] mt-[15px]'>

<form onSubmit={addiser} className='flex flex-col gap-[10px]'>
<input type="text" name='inpname' placeholder='Name...' />
<input name='inpage' type="text" placeholder='Age...' />
<button className='bt' type='submit' >Add</button>
</form>


<form onSubmit={edit} className='flex flex-col gap-[10px]'>
<input value={editname} onChange={((e)=>seteditname(e.target.value))} type="text" name='inpname' placeholder='Name...' />
<input  value={editage} onChange={((e)=>seteditage(e.target.value))} name='inpage' type="text" placeholder='Age...' />
<button className='bt' type='submit' >Edit User</button>
</form>

<div className='flex flex-col gap-[20px]'>

<input value={sear} onChange={((e)=>setsear(e.target.value))} type="search"  />
<select value={sel} onChange={((e)=>setsel(e.target.value))} >
  <option value="">All</option>
  <option value="true">Active</option>
  <option value="false">Inactive</option>
</select>

</div>

</div>


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
  data.filter((e)=>sel=="true"?e.status:sel=="false"?!e.status:e)
  .filter((e)=>e.name.toLocaleLowerCase().includes(sear.trim().toLocaleLowerCase()))
  .map((e,i)=>{
    return <tr key={i}>
   <td><input onChange={()=>ch(e.id)} checked={e.status} type="checkbox" /></td>
   <td>{e.id}</td>
   <td>{e.name}</td>
   <td>{e.age}</td>
   <td className={`${e.status?"text-[green]":"text-[red]"}`}>{e.status?"Activ":"Inactive"}</td>
   <td className='w-[300px] flex gap-[40px] justify-center items-center'><button onClick={()=>del(e.id)}  className='p-[12px] bg-red-500 text-[white] rounded-[5px]'>DELETE</button><button onClick={()=>show(e)} className='p-[12px] bg-blue-500 text-[white] rounded-[5px]'>EDITE</button></td>
    </tr>
  })
}


  </tbody>
  
  </table>    
  
  
  




    
    
    </>
  )
}

export default App
