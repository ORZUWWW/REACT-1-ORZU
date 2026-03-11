import React from 'react'

const Btngra = ({ name,w,}) => {
  return (
    <div>
      <button className={`bg-gradient-to-l from-[#016CA8] to-[#61B5E4] ${w} p-[15px] rounded-[5px] text-[white]`}>{name}</button>
    </div>
  )
}

export default Btngra
