import React from 'react'

const Btnsabz = ({name,bg,cl,w,br,b}) => {
  return (
    <div>
      <button className={`${bg} ${w}  font-bold  text-center ${cl}  p-[10px] rounded-[30px] ${b} border-[${br}] `}>{name}</button>
    </div>
  )
}

export default Btnsabz
