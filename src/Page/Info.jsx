import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

const Info = () => {
  const { t } = useTranslation();
  const {id}=useParams()
   let api = "http://37.27.29.18:8001/api";
  let img = "http://37.27.29.18:8001/images";
  
let [data,setdata]=useState(null)
let [file,setfile]=useState(null)


async function getid() {
  let data=await axios.get(`${api}/to-dos/${id}`)
  setdata(data.data.data)
}


useEffect(()=>{
  getid()
},[])


  return (
    <>
   <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-5">
    
    {data && (
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md transition hover:shadow-2xl">

        {/* Image */}
        <div className="flex justify-center mb-5">
          {data.images?.length > 0 ? (
            <img
              src={`${img}/${data.images[0].imageName}`}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-500">
              ?
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-1">
          {data.name}
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-center mb-5">
          {data.description || "No description"}
        </p>

        {/* Status */}
        <div className="flex justify-center mb-5">
          {data.isCompleted ? (
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
              ✅ Active
            </span>
          ) : (
            <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
              ❌ Inactive
            </span>
          )}
        </div>

        {/* Info block */}
        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 flex justify-between">
          <span>ID:</span>
          <span className="font-semibold">{data.id}</span>
        </div>

      </div>
    )}

  </div>





    </>
  )
}

export default Info
