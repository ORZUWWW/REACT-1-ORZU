import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Table = () => {
  let url = "http://37.27.29.18:8001/api/to-dos";
  let image = "http://37.27.29.18:8001/images";
  let api="http://37.27.29.18:8001"
  let [data, setdata] = useState([]);
  let [name, setname] = useState("");
  let [idx, setidx] = useState(null);
  let [status, setstatus] = useState(null);
  let [description, setdescription] = useState("");

let [openDelete, setOpenDelete] = useState(false)

let [deleteId, setDeleteId] = useState(null)

let navigate = useNavigate();



  async function get() {
    try {
      let { data } = await axios.get(url);
      setdata(data.data);
    } catch (error) {
      console.error(error.response.data.error);
    }  
  }  

  async function add(obj) {
    try {
      await axios.post(url,obj)
      setOpenAdd(false)
      get()
    } catch (error) {
      console.error(error);
    }  
}    

async function chek(id) {
  try {
    await axios.put(`${api}/completed?id=${id}`)
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
      description:description,
      id:idx,
      isCompleted:status,

    })
    setOpenedit(false)
    get()
  } catch (error) {
    console.error(error);
  }
}




let ed=(e)=>{
    setname(e.name)
    setidx(e.id)
    setdescription(e.description)
    setstatus(e.isCompleted)
    setOpenedit(true)
}



let [openAdd, setOpenAdd] = useState(false)
let [openedit, setOpenedit] = useState(false)


  let addform = (e) => {
  e.preventDefault()
  let formData = new FormData()
  formData.append("Images", e.target["inpimage"].files[0])
  formData.append("Name", e.target["inpname"].value)
  formData.append("Description", e.target["inpdescription"].value)
  add(formData)
  e.target.reset()
}



  async function del(id) {
    try {
      await axios.delete(`${url}?id=${id}`)
      get()
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    get();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] py-[40px] px-[15px]">
      <div className="max-w-[1200px] mx-auto bg-white shadow-lg rounded-2xl p-[25px]">
        <div className="flex justify-between px-[20px]">

        <h1 className="text-[28px] font-bold text-gray-800 mb-[25px]">
          Todo Table
        </h1>
        <button onClick={() => setOpenAdd(true)} className="bg-blue-500 text-white w-[200px] px-5 py-1 rounded-xl">Add Todo </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-[14px]">
                <th className="p-[12px] text-left">
                  <input type="checkbox" className="w-[16px] h-[16px]" />
                </th>
                <th className="p-[12px] text-left">ID</th>
                <th className="p-[12px] text-left">User</th>
                <th className="p-[12px] text-left">Description</th>
                <th className="p-[12px] text-left">Status</th>
                <th className="p-[12px] text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((e) => {
                return (
                  <tr
                    key={e.id}
                    className="border-b text-center hover:bg-gray-50 transition text-[14px]"
                  >
                    <td className="p-[12px] ">
                      <input
                        type="checkbox"
                        checked={e.isCompleted}
                        onChange={()=>chek(e.id)}
                        className="w-[16px] h-[16px]"
                      />
                    </td>

                    <td className="p-[12px] font-semibold text-gray-700">
                      {e.id}
                    </td>

                    <td className="p-[12px]">
                      <div className="flex gap-[12px] items-center">
                        <div className="flex gap-[5px]">
                          {
                            e.images.slice(0,1).map((i) => {
                              return (
                                <img
                                  key={i.id}
                                  src={`${image}/${i.imageName}`}
                                  alt=""
                                  className="w-[45px] h-[45px] rounded-full  border"
                                />
                              );
                            })
                          }
                        </div>

                        <h1 className="font-semibold text-gray-800">
                          {e.name}
                        </h1>
                      </div>
                    </td>

                    <td className="p-[12px] text-gray-600 max-w-[350px] ">
                      {e.description}
                    </td>

                    <td className="p-[12px]">
                      {e.isCompleted ? (
                        <span className="bg-green-100 text-green-600 px-[12px] py-[5px] rounded-full text-[12px] font-semibold">
                          Active
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-600 px-[12px] py-[5px] rounded-full text-[12px] font-semibold">
                          Inactive
                        </span>
                      )}
                    </td>

                    <td className="p-[12px]">
                      <div className="flex w-[200px] justify-center gap-[10px] flex-wrap">
                        <button onClick={()=>ed(e)} className="bg-blue-500 text-white px-[14px] py-[7px] rounded-lg text-[12px] hover:bg-blue-600 transition">
                          Edit
                        </button>

                        <button   onClick={() => {   setDeleteId(e.id);setOpenDelete(true)}}className="bg-red-500 text-white px-[14px] py-[7px] rounded-lg text-[12px] hover:bg-red-600 ">
                          Delete
                        </button>

                        <button   onClick={() => navigate(`/info/${e.id}`)} className="bg-gray-800 text-white px-[14px] py-[7px] rounded-lg text-[12px] hover:bg-black ">
                          Info
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

<Dialog
open={openAdd}
onClose={() => setOpenAdd(false)}
>

<DialogTitle>Add Todo</DialogTitle>

<DialogContent>

<form
onSubmit={addform}
className="bg-white shadow-lg rounded-2xl p-6 w-[300px] flex flex-col gap-4 border"
>

<h2 className="text-xl font-semibold text-gray-800">
Add Category
</h2>

<input
type="text"
name="inpname"
placeholder="Enter name..."
className="border p-2 rounded-xl  focus:ring-2 "
/>

<input
type="text"
name="inpdescription"
placeholder="Enter description..."
className="border p-2 rounded-xl  focus:ring-2 "
/>

<input
type="file"
name="inpimage"
className="border p-2 rounded-xl"
/>

<button
type="submit"
className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 "
>
Save
</button>

<button
className="bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 "
onClick={()=>setOpenAdd(false)}
>
Cancel
</button>

</form>

</DialogContent>
</Dialog>

<Dialog

open={openedit}
onClose={() => setOpenedit(false)}
>

<DialogTitle>Edit Title</DialogTitle>

<DialogContent>

<form
onSubmit={editform}
className="bg-white shadow-lg rounded-2xl p-6 w-[300px] flex flex-col gap-4 border"
>

<h2 className="text-xl font-semibold text-gray-800">
Add Category
</h2>

<input
type="text"
name="inpname"
placeholder="Enter name..."
value={name}
onChange={((e)=>setname(e.target.value))}
className="border p-2 rounded-xl  focus:ring-2 "
/>

<input
type="text"
name="inpdescription"
placeholder="Enter description..."
value={description}
onChange={((e)=>setdescription(e.target.value))}
className="border p-2 rounded-xl  "
/>

<button
type="submit"
className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 "
>
Save
</button>

<button
className="bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 "
onClick={()=>setOpenedit(false)}
>
Cancel
</button>

</form>

</DialogContent>
</Dialog>

<Dialog open={openDelete} onClose={() => setOpenDelete(false)}>

  <DialogTitle className="text-center text-xl font-bold text-red-500">
   Удалить елемент
  </DialogTitle>

  <DialogContent>

    <div className="flex flex-col items-center gap-4 p-4">

     
      <div className="w-18 h-17 flex items-center justify-center rounded-full bg-red-100 text-red-500 text-3xl">
        ⚠️
      </div>


      <p className="text-center text-gray-700 text-[15px]">
        Вы уверены, что хотите удалить этот элемент?
        <br />
        <span className="text-red-500 font-semibold">
         Это действие нельзя отменить!
        </span>
      </p>

  
      <div className="flex gap-4 mt-2">

        <button
          onClick={() => setOpenDelete(false)}
          className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 "
        >
       Нет
        </button>

        <button
          onClick={() => {
            del(deleteId)
            setOpenDelete(false)
          }}
          className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600  shadow-md"
        >
         Да
        </button>

      </div>

    </div>

  </DialogContent>

</Dialog>


    </div>
  );
};

export default Table;