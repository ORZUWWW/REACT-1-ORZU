import React from "react";
import { Route, Routes } from "react-router";


import Home from "./page/Home";
import About from "./page/About";
import Leaut from "./Leaut.jsx/Leaut";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Leaut/>}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
