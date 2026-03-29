import React from 'react'
import './App.css'
import axios from 'axios'
import { Route, Router, Routes } from 'react-router-dom'
import Leaut from './Leaut/Leaut'
import Home from './Page/Home'
import Table from './Page/Table'
import Info from './Page/Info'


const App = () => {

  return <Routes>
  <Route path='/' element={<Leaut />}  >
 <Route index element={<Home />} />
 <Route path='/Info/:id' element={<Info />} />
 <Route path='/Table' element={<Table />} />
  </Route>
  </Routes>
}

export default App
