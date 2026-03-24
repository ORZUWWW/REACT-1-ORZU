import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
const [products, setProduct] = useState([
    {
      id: 1,
      name: "Shampun",
      price: 100,
      date: "10/02/27",
      rating: "5",
      wight: "10kg",
    },
    {
      id: 2,
      name: "Tolo",
      price: 1.5,
      date: "10/02/26",
      rating: "6",
      wight: "100g",
    },
    {
      id: 3,
      name: "Snickers",
      price: 7,
      date: "10/02/27",
      rating: "10",
      wight: "150g",
    },
  ]);

  let navigate=useNavigate()
  let productid=(id)=>{
    navigate(`product/${id}`)
  }

  return (
    <div className='flex gap-[40px] justify-center py-[40px]'>
      {
        products.map((e)=>{
          return <div onClick={()=>productid(e.id)}
           className='border p-[10px] hover:bg-gray-500  bg-gray-300 w-[130px] border-2 rounded-2xl'>
       <h1>{e.name}</h1>
       <p>{e.price}</p>
       <p>{e.rating}</p>
          </div>
        })
      }
    </div>
  )
}

export default Home
