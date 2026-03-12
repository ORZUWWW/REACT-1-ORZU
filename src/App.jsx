import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  let [cnt, setcnt] = useState(0);
  let [text, settext] = useState("");
  let [editname,seteditname]=useState("")
  let [editage,seteditage]=useState("")
  let [edituser,setedituser]=useState(null)
  let [deluser,setdeluser]=useState(null)
  let [data, setdata] = useState([
    {
      name:"ORZU",
      age:18,
      status:true,
      id:1
    },
    {
      name:"AZIZ",
      age:18,
      status:false,
      id:2
    },
    {
      name:"AZIM",
      age:18,
      status:false,
      id:3
    },
    {
      name:"SOLEH",
      age:18,
      status:true,
      id:4
    },
  ]);

  let del=(id)=>{
   let newdata=data.filter((e)=>e.id!=id)
   setdata(newdata)
  }


   
  let adduser=(e)=>{
    e.preventDefault()
    let onj={
      name:e.target["inpname"].value,
      age:e.target["inpage"].value,
      status:true,
      id:data.length + 1
    }
    setdata([...data,onj])
    }
 let edit=(e)=>{
  setedituser(e)
  seteditname(e.name)
  seteditage(e.age) 
 }

let editusers=(e)=>{
  e.preventDefault()
  let newdata=data.map((e)=>{
    if(e.id==edituser.id){
      return {
        ...e,
        name:editname,
        age:editage
      }
    }
    else{
   return (e)
    }
  })
  setdata(newdata)
}

let stat=(id)=>{
   let newdata=data.map((e)=>{
    if(e.id==id){
      return {
        ...e,
        status:!e.status
    }
  }
  return e
   })
   setdata(newdata)
}


  // let plus = () => {
  //   setcnt(cnt + 1);

  //   setdata([...data, cnt + 1]);
  // };

  // let minus = () => {
  //   setcnt(cnt - 1);

  //   setdata([...data, cnt - 1]);
  // };

//  let addmodal=()=>{
//    ii.showModal()
//  }

  return (
    <>
      {/* <h1>{cnt}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <input
        onChange={(e) => settext(e.target.value)}
        className="i"
        type="text"
      /> */}


<button className="border bg-green-600 px-[20px] text-white py-[10px] rounded-[5px] ml-[10%] my-[40px]">Add new user</button>

<div className="flex gap-[100px] justify-center items-center">
  

  <form onSubmit={adduser} className="w-[400px] mx-auto border p-[10px] rounded-[4px] " >
    <h1 className="text-[37px] font-bold">Add New User</h1>
      <input className="border-1 border-gray-500 p-[15px] rounded-[6px]  my-[10px]"  name="inpname" type="text"  placeholder="Name..."/>
      <input className="border-1 border-gray-500 p-[15px] rounded-[6px]  my-[10px]"  name="inpage" type="text"  placeholder="Age..."/>
    <button className="border py-[10px] px-[20px] ml-[20px] rounded-[5px] bg-blue-700 text-white" type="submit">Submit</button>
  </form>

  <form onSubmit={editusers} className="w-[400px] editform mx-auto border p-[10px] rounded-[4px] " >
    <h1 className="text-[37px] font-bold">EDIT USER</h1>
      <input className="border-1 border-gray-500 p-[15px] rounded-[6px]  my-[10px]" value={editname} onChange={(e)=>seteditname(e.target.value)} name="inpname" type="text"  placeholder="Name..."/>
      <input className="border-1 border-gray-500 p-[15px] rounded-[6px]  my-[10px]" value={editage} onChange={(e)=>seteditage(e.target.value)} name="inpage" type="text"  placeholder="Age..."/>
    <button  className="border py-[10px] px-[20px] ml-[20px] rounded-[5px] bg-blue-700 text-white" type="submit">Submit</button>
  </form>

</div>

<table className="mt-[40px]">
  <thead>
    <tr>
      <th><input type="checkbox"/></th>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
      <th>STATUS</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
       data.map((e)=>{
      return ( 
      <tr key={e.id} >
          <td><input onClick={()=>stat(e.id)} type="checkbox" /></td>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.status ? "Active" : "Inactive"}</td>
          <td><button onClick={()=>edit(e)} className="border py-[10px] px-[20px] rounded-[5px] bg-blue-700 text-white">Edit</button> <button onClick={()=>del(e.id)} className="border py-[10px] px-[20px] rounded-[5px] bg-red-700 text-white">Delete</button></td>
        </tr>)
       })
    }

  </tbody>
</table>























{/* <dialog className="ii" >
<h1>SAlom</h1>
</dialog>

<button onClick={addmodal}>Add</button>
 */}
















      {/* <h1>{text}</h1>
      <div style={{display:"flex"}} className="flex gap-[10px]">
        {data.map((e) => {
          return <h1>{e}</h1>;
        })} */}
{/* 
      </div> */}



    </>
  );
}

export default App;
