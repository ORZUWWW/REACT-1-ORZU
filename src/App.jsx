import React from 'react'
import './App.css'
import axios from 'axios'
import { Route, Router, Routes } from 'react-router'
import Leaut from './Leaut/Leaut'
import Home from './page/Home'
import About from './Page/About'
const App = () => {

  return <Routes>
  <Route path='/' element={<Leaut />}  >
 <Route index element={<Home />} />
 <Route path='/About' element={<About />} />
  </Route>
  </Routes>
}

export default App
