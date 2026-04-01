import axios from 'axios'
import React, { Component } from 'react'
import { useTranslation } from "react-i18next";
import "../App.css"
import {
  Dialog,
  DialogTitle,
  DialogContent
} from "@mui/material";
class Home extends Component{
constructor(props){
  super(props)
  this.state={
    data:[],
    addstatus:false,
    editname:"",
    editDescription:"",
    editstatus:false,
    idx:null,
  };
  
  this.imageUrl="http://37.27.29.18:8001/images";
  this.url="http://37.27.29.18:8001/api/to-dos";
  this.api="http://37.27.29.18:8001/completed?id"
}  


addform=async(e)=>{
  e.preventDefault()
  const formDate=new FormData()
  
  formDate.append("Images",e.target.image.files[0]);
  formDate.append("Name",e.target.name.value)
  formDate.append("Description",e.target.description.value)
  
  e.target.reset()
  try {
    await axios.post(`${this.url}`,formDate)
    this.get()
    this.setState({addstatus:false})
  } catch (error) {
    console.error(error);
  }
}



del=async(id)=>{
  try {
   await axios.delete(`${this.url}?id=${id}`)
    this.get()
  } catch (error) {
    console.error(error);
  }
}


edit=(e)=>{
  this.setState({editname:e.name})
  this.setState({editDescription:e.description})
  this.setState({idx:e.id})
}


editform=async(e)=>{
   e.preventDefault()
   try {
    await axios.put(this.url,{
      name:this.state.editname,
      description:this.state.editDescription,
      id:this.state.idx
    })
    this.setState({editstatus:false})
    this.get()
   } catch (error) {
    console.error(error);
   }
}



ch=async(id)=>{
  try {
    await axios.put(`${this.api}=${id}`)
    this.get()
  } catch (error) {
    console.error(error);
  }
}





async get(){
  try {
    let {data}=await axios.get(this.url)
    this.setState({data:data.data})
  } catch (error) {
    console.error(error.response?.data?.error);
  }
}

componentDidMount(){
  this.get()
}


render(){


  const { t } = this.props;


return(
<>


<div className="min-h-screen bg-gray-100 flex justify-center p-10">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
          
          <div className='flex justify-between px-[100px] items-center'>
            
          <h1 className="text-2xl font-bold text-center">
            Todo List
          </h1>
          <button onClick={()=>this.setState({addstatus:true})} className='p-[20px] bg-blue-400 text-white text-[20px] rounded-2xl'>ADD</button>

          </div>
          <table className="w-full border rounded-xl overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th><input type="checkbox" name="" id="" /></th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Description</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((e) => (
                <tr
                  key={e.id}
                  className="text-center border-t hover:bg-gray-50"
                >
                  <td>
                    <input onChange={()=>this.ch(e.id)} type="checkbox" checked={e.isCompleted} />
                  </td>
                  <td className="p-2">
                    {e.images?.length > 0 && (
                      <img
                        src={`${this.imageUrl}/${e.images[0].imageName}`}
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    )}
                  </td>

                  <td className="p-2 font-medium">
                    {e.name}
                  </td>

                  <td className="p-2">
                    {e.description}
                  </td>

                  <td className="p-2">
                    {e.isCompleted ? (
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td>
                    <div className='flex gap-[20px] items-center'>
<button onClick={()=>{this.edit(e),this.setState({editstatus:true})}} className='p-[10px] bg-blue-500 rounded-2xl text-white'>Edit</button>
<button onClick={()=>this.del(e.id)} className='p-[10px] bg-red-500 rounded-2xl text-white'>Delete</button>
<button className='p-[10px] bg-black rounded-2xl text-white'>Info</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>











<Dialog
  open={this.state.addstatus}
  onClose={()=>this.setState({addstatus:false})}
>
  <DialogTitle>Add Todo</DialogTitle>

  <DialogContent>

    <form
      onSubmit={this.addform}
      className="flex flex-col gap-3 p-3"
    >

      <input
        name="name"
        placeholder="Name"
        className="border p-2 rounded"
      />

      <input
        name="description"
        placeholder="Description"
        className="border p-2 rounded"
      />

      <input
        type="file"
        name="image"
      />

      <button
        className="bg-blue-500 text-white py-2 rounded"
        type='submit'
      >
        Save
      </button>

    </form>

  </DialogContent>
</Dialog>


<Dialog
  open={this.state.editstatus}
  onClose={()=>this.setState({editstatus:false})}
>
  <DialogTitle>Edit Todo</DialogTitle>

  <DialogContent>

    <form
      onSubmit={this.editform}
      className="flex flex-col gap-3 p-3"
    >

      <input
        name="name"
        placeholder="Name"
        className="border p-2 rounded"
        value={this.state.editname}
        onChange={((e)=>this.setState({editname:e.target.value}))}
      />

      <input
        name="description"
        placeholder="Description"
        className="border p-2 rounded"
         value={this.state.editDescription}
           onChange={((e)=>this.setState({editDescription:e.target.value}))}
      />
      <button
        className="bg-blue-500 text-white py-2 rounded"
        type='submit'
      >
        Save
      </button>

    </form>

  </DialogContent>
</Dialog>







</>
)

}

}
export default Home;