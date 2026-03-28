import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  let url="http://37.27.29.18:8001/api/to-dos"
  let image="http://37.27.29.18:8001/images"
  let api="http://37.27.29.18:8001"
   let [data,setdata]=useState([])  

  

async function get() {
  try {
    let {data}=await axios.get(url)
    setdata(data.data)
  } catch (error) {
    console.error(error.response.data.error);
  }
}




useEffect(()=>{
  get()
},[])





  return (
    <div>




    </div>
  )
}

export default Home