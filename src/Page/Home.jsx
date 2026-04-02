import { useReducer } from "react";

const initialState = {
  data: [
    { name: "Herbert Hintz", status: false, age: 63, id: "5" },
    { name: "Sidney Kertzmann", status: false, age: 23, id: "9" },
    { name: "Terri Marquardt", status: false, age: 45, id: "11" },
    { name: "Marcia Murphy", status: false, age: 9, id: "12" },
    { name: "Simon Leffler", status: false, age: 65, id: "13" },
    { name: "Laura Flatley", status: false, age: 51, id: "14" }
  ],
  idx:null,
};

function reducer(state, action) {
   if(action.key=="add"){
    action.value.preventDefault()
     let newuser={
    id:Date.now(),
    name:action.value.target["inpname"].value,
    age:action.value.target["inpage"].value,
    status:true
  }
  return {
    ...state,
    data:[...state.data,newuser]}
  }
  if(action.key=="delete"){
    return {data:state.data.filter((e)=>e.id!=action.value)}
  }
  if(action.key=="editstart"){
    return {
       ...state,
       idx:action.value
    }
  }
  if(action.key=="editage"){
    return {
      ...state,
      idx:{
        ...state.idx,
        age:action.value
      }
    }
  }
  if(action.key=="editname"){
    return {
      ...state,
         idx:{
        ...state.idx,
        name:action.value
      }
    }
  }
  if(action.key=="edit"){
    action.value.preventDefault()
    return {
      ...state,
     data:state.data.map((e)=>{
      if(e.id==state.idx.id){
        return state.idx
      }
      return e
     })
    }
  }
  if(action.key=="ch"){
    return {
      ...state,
      data:state.data.map((el)=>{
        if(el.id==action.value){
          return {
            ...el,
            status:!el.status}
        }
        return el
      })
    }
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 text-white">

      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
        USER MANAGEMENT
      </h1>

      <div className="flex justify-center gap-[80px] flex-wrap">

        <form onSubmit={(e)=>dispatch({key:"add",value:e})}
          className="bg-gray-800 shadow-2xl rounded-3xl p-6 w-[350px] flex flex-col gap-4 border border-gray-700 hover:scale-105 transition">

          <h2 className="text-xl font-semibold text-center text-green-400">Add User</h2>

          <input
            className="bg-gray-900 border border-gray-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Name..."
            name="inpname"
          />

          <input
            className="bg-gray-900 border border-gray-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Age..."
            name="inpage"
          />

          <button className="bg-green-500 hover:bg-green-600 p-3 rounded-xl font-semibold tracking-wide transition">
            Save
          </button>
        </form>

        <form onSubmit={(e)=>dispatch({key:"edit",value:e})}
          className="bg-gray-800 shadow-2xl rounded-3xl p-6 w-[350px] flex flex-col gap-4 border border-gray-700 hover:scale-105 transition">

          <h2 className="text-xl font-semibold text-center text-blue-400">Edit User</h2>

          <input
            className="bg-gray-900 border border-gray-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name..."
            name="inpname"
            value={state.idx?.name || ""}
            onChange={(e)=>{dispatch({
              key:"editname",
              value:e.target.value
            })}}
          />

          <input
            className="bg-gray-900 border border-gray-700 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Age..."
            name="inpage"
            value={state.idx?.age || ""}
            onChange={(e)=>dispatch({
              key:"editage",
              value:e.target.value
            })}
          />

          <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl font-semibold tracking-wide transition">
            Edit
          </button>
        </form>

      </div>

      <div className="mt-12 bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-700 overflow-x-auto">

        <table className="w-full text-center">

          <thead className="bg-gray-900 text-gray-300 uppercase text-sm">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {state.data.map((e) => {
              return (
                <tr key={e.id} className="border-b border-gray-700 hover:bg-gray-700 transition">

                  <td>
                    <input
                      onChange={()=>dispatch({key:"ch", value:e.id})}
                      type="checkbox"
                      checked={e.status}
                      className="scale-125 accent-green-500"
                    />
                  </td>

                  <td className="font-mono text-gray-400">{e.id}</td>

                  <td className="font-semibold">{e.name}</td>

                  <td>{e.age}</td>

                  <td>
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                      e.status ? "bg-green-500 text-white" : "bg-gray-500"
                    }`}>
                      {e.status ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="flex justify-center gap-3 py-3">

                    <button
                      onClick={()=>dispatch({key:"editstart",value:e})}
                      className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-xl transition">
                      Edit
                    </button>

                    <button
                      onClick={()=>dispatch({key:"delete",value:e.id})}
                      className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-xl transition">
                      Delete
                    </button>

                    <button className="bg-gray-900 hover:bg-black px-4 py-1 rounded-xl transition">
                      Info
                    </button>

                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Counter;