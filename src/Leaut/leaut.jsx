import React from 'react'
import { Link, Outlet } from 'react-router'

const leaut = () => {
  return (
    <div>
      <nav>
        <Link to={"/"} >Home</Link>
        <Link to={"/About"}>About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default leaut
