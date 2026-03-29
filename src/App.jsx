import React from 'react'
import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Leaut from './Leaut/Leaut'
import About from './page/About'
import Home from './page/Home'
const App = () => {
  return <Routes>
  <Route path='/' element={<Leaut />}  >
 <Route index element={<Home />} />
 <Route path='/About' element={<About />} />
  </Route>
  </Routes>
}

export default App
