import React, { useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
let url="http://localhost:3000/users"
let [data,setdata]=useState([])
let [name,setname]=useState("")
let [age,setage]=useState("")
let [status,setstatus]=useState(null)
let [idx,setidx]=useState(null)
let [select,setselect]=useState("")
let [sear,setsear]=useState("")

async function get() {
  try {
    let {data}=await axios.get(url)
    setdata(data)
  } catch (error) {
    console.error(error);
  }
}

let ed=(e)=>{
    setage(e.age)
    setname(e.name)
    setidx(e.id)
    setstatus(e.status)
}

async function editform(e) {
  e.preventDefault()
  try {
    let {data}=await axios.put(url+"/"+idx,{
      name:name,
      age:age,
      status:status,
      id:idx
    })

   get()
  } catch (error) {
    console.error(error);
  }
}


let adduser=async(e)=>{
  e.preventDefault()
  let newuser={
    name:e.target["inpname"].value,
    age:e.target["inpage"].value,
    status:true,
    id:data.length+1
  }
  try {
    await axios.post(url,newuser)
    get()
  } catch (error) {
    console.error(error);
  }
}

async function del(id) {
  try {
    await axios.delete(url+"/"+id)
    get()
  } catch (error) {
    console.error(error);
  }
}


async function ch(e) {
  try {
    await axios.put(`${url}/${e.id}`,{
      ...e,
      status:!e.status
    })
    get()
  } catch (error) {
    console.error(error);
  }
}


useEffect(()=>{
   get()
},[])


  return (
    <>

<div className='flex gap-[120px] justify-center items-center mt-[20px]'>
<form onSubmit={adduser} className='flex flex-col gap-[15px] border w-[300px] p-[10px] rounded-[10px]' >
<input className='border p-[3px] border-gray-400 rounded-[5px]' name='inpname' type="text" placeholder='Name...' />
<input className='border p-[3px] border-gray-400 rounded-[5px]' name='inpage' type="text" placeholder='Age...' />
<button className='bg-[green] p-[10px] rounded-[10px] text-[white]' type='submit'>Add new user</button>
</form>









<form onSubmit={editform} className='flex flex-col gap-[15px] border w-[300px] p-[10px] rounded-[10px]' >
<input value={name}  onChange={((e)=>setname(e.target.value))} className='border p-[3px] border-gray-400 rounded-[5px]' name='inpname' type="text" placeholder='Name...' />
<input value={age} onChange={((e)=>setage(e.target.value))} className='border p-[3px] border-gray-400 rounded-[5px]' name='inpage' type="text" placeholder='Age...' />
<button className='bg-[green] p-[10px] rounded-[10px] text-[white]' type='submit'>Add new user</button>
</form>



<div>
  <select value={select} onChange={((e)=>setselect(e.target.value))} >
    <option value="">All</option>
    <option value="true">Active</option>
    <option value="false">Inactive</option>
  </select>

  <input value={sear} onChange={((e)=>setsear(e.target.value))} type="search" className='border p-[10px] rounded-[30px] ' />


</div>




</div>


  <table>
    <thead>
      <th><input type="checkbox"/></th>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Status</th>
      <th>Actions</th>
    </thead>
    <tbody>
      {
        data.filter((e)=>e.name.toLowerCase().includes(sear.trim().toLocaleLowerCase()))
        .filter((e)=>select=="true"?e.status:select=="false"?!e.status:e)
        .map((e,i)=>{
          return <tr>
          <td><input onClick={()=>ch(e)} checked={e.status} type="checkbox" /></td>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td className={`${e.status?"text-[green]":"text-[red]"}`}>{e.status?"Active":"Inactive"}</td>
          <td className='w-[200px]'><button onClick={()=>ed(e)} className='p-[10px] bg-[blue] text-[white] rounded-[5px] mr-[20px]'>Edit</button><button onClick={()=>del(e.id)} className='p-[10px] bg-[red] text-[white] rounded-[5px]'>DELETE</button></td>
          </tr>
        })
      }
    </tbody>
  </table>
  
    
    
    
    
    </>
  )
}

export default App
