import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
// MUI

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Todo = () => {
  const inputRef = useRef();


const navigate = useNavigate();



  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const api = "http://37.27.29.18:8001/api/to-dos";
  const image = "http://37.27.29.18:8001/images";

  // 📱 MUI FULLSCREEN
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ GET
  const getData = async () => {
    const res = await axios.get(api);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // ✅ OPEN ADD
  const openAdd = () => {
    setEdit(null);
    setOpen(true);
    setTimeout(() => {
      inputRef.current.value = "";
    }, 0);
  };

  // ✅ OPEN EDIT
  const openEdit = (e) => {
    setEdit(e);
    setOpen(true);
    setTimeout(() => {
      inputRef.current.value = e.name;
    }, 0);
  };

  // ✅ SAVE (ADD + EDIT)
  const save = async () => {
    const name = inputRef.current.value;

    if (!name) return;

    if (edit) {
      await axios.put(`${api}/${edit.id}`, { name });
    } else {
      await axios.post(api, { name });
    }

    setOpen(false);
    getData();
  };

  // ✅ DELETE
  const deleteTodo = async (id) => {
    const ok = window.confirm("Are you sure delete?");
    if (!ok) return;

    await axios.delete(`${api}/${id}`);
    getData();
  };

  // ✅ COMPLETED
  const completed = async (e) => {
    await axios.patch(`${api}?id=${e.id}`, {
      ...e,
      isCompleted: !e.isCompleted,
    });
    getData();
  };

  return (
    <div className="p-10">

      {/* ADD BUTTON */}
      <button
        onClick={openAdd}
        className="bg-green-500 text-white px-4 py-2"
      >
        Add Todo
      </button>

      {/* TABLE */}
      <table className="w-full mt-6 border text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>

              {/* IMAGE */}
              <td>
                <img
                  src={`${image}/${e.image}`}
                  className="w-16 mx-auto"
                />
              </td>

              {/* COMPLETED */}
              <td>
                <button onClick={() => completed(e)}>
                  {e.isCompleted ? "✅" : "❌"}
                </button>
              </td>

              {/* ACTIONS */}
              <td className="space-x-2">
                <button
                  onClick={() => openEdit(e)}
                  className="bg-blue-500 text-white px-3"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(e.id)}
                  className="bg-red-500 text-white px-3"
                >
                  Delete
                </button>

<button
  onClick={() => navigate(`/info/${e.id}`)}
  className="bg-yellow-500 text-white px-2"
>
  Info
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔥 MUI MODAL */}
      <Dialog open={open} onClose={() => setOpen(false)} fullScreen={fullScreen}>
        <DialogTitle>
          {edit ? "Edit Todo" : "Add Todo"}
        </DialogTitle>

        <DialogContent>
          <input
            ref={inputRef}
            className="border p-2 w-full mt-2"
            placeholder="Enter name..."
          />

          <div className="flex gap-2 mt-4">
            <Button variant="contained" onClick={save}>
              Save
            </Button>

            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Todo;