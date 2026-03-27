import React, { lazy, Suspense } from 'react'
import './App.css'
import axios from 'axios'
import { Route, Router, Routes } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'



let Home=lazy(()=>import("./Page/Home"))
let Leaut=lazy(()=>import("./Leaut/Leaut"))
let About=lazy(()=>import("./Page/About"))

const App = () => {

  return <Routes>
  <Route path='/' element={<Leaut />}  >
 <Route index element={<Home />} />
 <Route path='/About' element={
  <Suspense fallback={<CircularProgress enableTrackSlot size="30px" />}>
    <About />
  </Suspense>
  } />
  </Route>
  </Routes>
}

export default App
