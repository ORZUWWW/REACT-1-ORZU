import React, { useEffect } from 'react'




const Card = () => {
    useEffect(()=>{
        console.log("1");
        return ()=>{
            console.log("2");
        }
    },[])


  return (
    <div>
    <h1>Salom</h1>
    </div>
  )
}

export default Card