import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";


const Home = () => {
  let url="http://37.27.29.18:8001/api/to-dos"
   let [data,setdata]=useState([])  
      const { t, i18n } = useTranslation();

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
 <div>
      <h1>{t("hello")}</h1>
      <h1>{t("salom")}</h1>
      <button onClick={() => i18n.changeLanguage("ru")}>
        RU
      </button>
      <button onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
    </div>
    </div>
  )
}

export default Home