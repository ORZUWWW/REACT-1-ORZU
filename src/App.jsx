import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [nameedit, setnameedit] = useState("");
  let [ageedit, setageedit] = useState("");
  let [idx, setidx] = useState(null);
  let [statuss, setstatus] = useState(null);
  let [search, setsearch] = useState("");
  let [select,setselect]=useState("")
  let [data, setdata] = useState([
    {
      name: "ORZU",
      age: 18,
      status: true,
      id: 1,
    },
    {
      name: "AZIZ",
      age: 18,
      status: false,
      id: 2,
    },
    {
      name: "AZIM",
      age: 18,
      status: false,
      id: 3,
    },
    {
      name: "SOLEH",
      age: 18,
      status: true,
      id: 4,
    },
  ]);

  let show = (e) => {
    setnameedit(e.name);
    setageedit(e.age);
    setidx(e.id);
    setstatus(e.status);
  };

  let edit = (ev) => {
    ev.preventDefault();
    let newdata = data.map((e) => {
      if (e.id == idx) {
        e = {
          name: nameedit,
          age: ageedit,
          id: idx,
          status: statuss,
        };
      }
      return e;
    });
    setdata(newdata);
  };

  let del = (id) => {
    let newdata = data.filter((e) => e.id != id);
    setdata(newdata);
  };

  // let add=(e)=>{
  //   e.preventDefault()
  //   let obj={
  //     name:
  //   }
  // }

  let ch = (id) => {
    let newdata = data.map((e) => {
      if (e.id == id) {
        return {
          ...e,
          status: !e.status,
        };
      }
      return e;
    });
    setdata(newdata);
  };

  return (
    <>
      <div>
        <form className="p-[10px] flex flex-col w-[300px] gap-[10px]">
          <input
            name="inpname"
            className="border p-[12px] rounded-[5px] "
            type="text"
            placeholder="Name..."
          />
          <input
            name="inpage"
            className="border p-[12px] rounded-[5px] "
            type="text"
            placeholder="Age..."
          />
          <button
            type="submit"
            className="bg-[#5ec95e] p-[14px] border text-[white] rounded-[5px]"
          >
            ADD
          </button>
        </form>

        <form
          onSubmit={edit}
          className="p-[10px] flex flex-col w-[300px] gap-[10px]"
        >
          <input
            name="inpname"
            className="border p-[12px] rounded-[5px] "
            value={nameedit}
            onChange={(e) => setnameedit(e.target.value)}
            type="text"
            placeholder="Name..."
          />
          <input
            name="inpage"
            className="border p-[12px] rounded-[5px] "
            value={ageedit}
            onChange={(e) => setageedit(e.target.value)}
            type="text"
            placeholder="Age..."
          />
          <button
            type="submit"
            className="bg-[#5ec95e] p-[14px] border text-[white] rounded-[5px]"
          >
            EDIT
          </button>
        </form>

        <input
          type="search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="border-2 p-2 m-5 rounded-[20px] "
        />

        <select value={select} onChange={((e)=>setselect(e.target.value))}>
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>

      <table className="mt-[40px]">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((e)=>select=="true"?e.status:select=="false"?!e.status:e)
            .filter((e) =>
              e.name
                .toLocaleLowerCase()
                .includes(search.trim().toLocaleLowerCase()),
            )
            .map((e) => {
              return (
                <tr key={e.id}>
                  <td>
                    <input
                      onChange={() => ch(e.id)}
                      type="checkbox"
                      checked={e.status}
                    />
                  </td>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td className={`${e.status ? "text-[green]" : "text-[red]"}`}>
                    {e.status ? "Active" : "Inactive"}
                  </td>
                  <td>
                    <button
                      onClick={() => show(e)}
                      className="border py-[10px] px-[20px] rounded-[5px] bg-blue-700 text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => del(e.id)}
                      className="border py-[10px] px-[20px] rounded-[5px] bg-red-700 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default App;
