import React, { useState } from 'react'
import { useParams } from 'react-router';



const Pageid = () => {

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
  let  {productid}=useParams()
  let e=products.find((e)=>e.id==productid)
  return (
    <div>
       <div className='border p-[10px] hover:bg-gray-500  bg-gray-300 w-[130px] border-2 rounded-2xl'>
       <h1>{e.name}</h1>
       <p>{e.price}</p>
       <p>{e.rating}</p>
          </div>
    </div>
  )
}

export default Pageid
