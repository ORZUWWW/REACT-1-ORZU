import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

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


const { t, i18n } = useTranslation();

  return (

    
     <div>
      <h1>{t("hello")}</h1>
    </div>




  )
}

export default Home