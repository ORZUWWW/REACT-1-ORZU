import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const url = "http://37.27.29.18:8001/api/to-dos";
  const imageUrl = "http://37.27.29.18:8001/images";
  const api = "http://37.27.29.18:8001";

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [idx, setIdx] = useState(null);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const navigate = useNavigate();

  async function getData() {
    const { data } = await axios.get(url);
    setData(data.data);
  }

  async function add(formData) {
    await axios.post(url, formData);
    setOpenAdd(false);
    getData();
  }

  async function del(id) {
    await axios.delete(`${url}?id=${id}`);
    getData();
  }

 const chek=useCallback(async(id)=>{
    await axios.put(`${api}/completed?id=${id}`);
    getData();
  },[])

  async function editForm(e) {
    e.preventDefault();
    await axios.put(url, {
      id: idx,
      name,
      description,
      isCompleted: status,
    });
    setOpenEdit(false);
    getData();
  }


  function openEditModal(item) {
    setName(item.name);
    setDescription(item.description);
    setStatus(item.isCompleted);
    setIdx(item.id);
    setOpenEdit(true);
  }

  function addForm(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("Images", e.target.inpimage.files[0]);
    formData.append("Name", e.target.inpname.value);
    formData.append("Description", e.target.inpdescription.value);

    add(formData);
    e.target.reset();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Todo Table</h1>
          <button
            onClick={() => setOpenAdd(true)}
            className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>

        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-[10px]"></th>
              <th className="py-[10px]">ID</th>
              <th className="py-[10px]">User</th>
              <th className="py-[10px]">Description</th>
              <th className="py-[10px]">Status</th>
              <th className="py-[10px]">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((e) => (
              <tr key={e.id} className="border-t text-center hover:bg-gray-50">
                <td>
                  <input
                    type="checkbox"
                    checked={e.isCompleted}
                    onChange={() => chek(e.id)}
                  />
                </td>

                <td>{e.id}</td>

                <td className="p-1">
  <div className="flex items-center gap-3">
    {e.images?.length > 0 && (
      <img
        src={`${imageUrl}/${e.images[0].imageName}`}
        className="w-10 h-10 rounded-full object-cover border"
      />
    )}
    <span className="font-medium text-gray-800">
      {e.name}
    </span>
  </div>
</td>

                <td>{e.description}</td>

                <td>
                  {e.isCompleted ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                      Inactive
                    </span>
                  )}
                </td>

                <td className="flex gap-2 py-[10px] justify-center flex-wrap">
                  <button
                    onClick={() => openEditModal(e)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(e.id);
                      setOpenDelete(true);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => navigate(`/info/${e.id}`)}
                    className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>




      <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <form onSubmit={addForm} className="flex flex-col gap-3 p-3">
            <input name="inpname" placeholder="Name" className="border p-2 rounded" />
            <input name="inpdescription" placeholder="Description" className="border p-2 rounded" />
            <input type="file" name="inpimage" />
            <button className="bg-blue-500 text-white py-2 rounded">Save</button>
          </form>
        </DialogContent>
      </Dialog>

 
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <form onSubmit={editForm} className="flex flex-col gap-3 p-3">
            <input value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded" />
            <button className="bg-blue-500 text-white py-2 rounded">Save</button>
          </form>
        </DialogContent>
      </Dialog>

  
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Delete?</DialogTitle>
        <DialogContent className="flex gap-4 p-4">
          <button onClick={() => setOpenDelete(false)} className="border px-4 py-2 rounded">
            No
          </button>
          <button
            onClick={() => {
              del(deleteId);
              setOpenDelete(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Yes
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;