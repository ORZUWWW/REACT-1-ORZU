import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  let url="http://37.27.29.18:8001/api/categories"
   let [data,setdata]=useState([])  
  let [name,setname]=useState("")
  let [idx,setidx]=useState(null)
  
async function get() {
  try {
    let {data}=await axios.get(url)
    setdata(data.data)
  } catch (error) {
    console.error(error.response.data.error);
  }
}


let edit=(e)=>{
  setname(e.name)
  setidx(e.id)
}



useEffect(()=>{
  get()
},[])

async function add(obj) {
    try {
      await axios.post(url,obj)
      get()
    } catch (error) {
      console.error(error);
    }
}


async function editform(e) {
   e.preventDefault()
   try {
    await axios.put(url,{
      name:name,
      id:idx
    })
    get()
    setname("")
    setidx(null)
   } catch (error) {
    console.error(error);
   }
}



async function deleteuser(id) {
  try {
    await axios.delete(`${url}?id=${id}`)
    get()
  } catch (error) {
    console.error(error);
  }
}

let addform=(e)=>{
  e.preventDefault()
  let obj={
    name:e.target["inpname"].value,
  }
   add(obj)
}

  return (
    <div>

<div className="grid w-[80%] m-auto mt-[20px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  {data.map((e, i) => {
    return (
      <div
        key={e.id}
        className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 hover:shadow-2xl transition duration-300 border"
      >
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          {e.name}
        </h1>

        <p className="text-sm text-gray-500">
          ID: {e.id}
        </p>

        <div className="mt-4 gap-1 flex justify-end">
          <button onClick={()=>deleteuser(e.id)} className="text-sm bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
            DELETE
          </button>
          <button onClick={()=>edit(e)}  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
            EDITE
          </button>
        </div>
      </div>
    );
  })}
</div>



<div className='flex mt-[40px] justify-center items-center gap-[200px]'>




<form
  onSubmit={addform}
  className="bg-white shadow-lg rounded-2xl p-6 w-[300px] flex flex-col gap-4 border"
>
  <h2 className="text-xl font-semibold text-gray-800">Add Category</h2>

  <input
    type="text"
    name="inpname"
    placeholder="Enter name..."
    className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <button
    type="submit"
    className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
  >
    Save
  </button>
</form>


<form
    onSubmit={editform}
    className="bg-yellow-50 shadow-lg rounded-2xl p-6 w-[300px] flex flex-col gap-4 border"
  >
    <h2 className="text-xl font-semibold text-gray-800">
      Edit Category
    </h2>

    <input
      type="text"
       value={name}
       onChange={(e) => setname(e.target.value)}
      className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />

    <div className="flex gap-2">
      <button
        type="submit"
        className="bg-yellow-500 text-white py-2 px-4 rounded-xl hover:bg-yellow-600 transition"
      >
        Update
      </button>

      <button
        type="button"
        // onClick={() => setEditId(null)}
        className="bg-gray-400 text-white py-2 px-4 rounded-xl hover:bg-gray-500"
      >
        Cancel
      </button>
    </div>
  </form>



</div>



    </div>
  )
}

export default Home