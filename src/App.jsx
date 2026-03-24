import React from "react";
import { Route, Routes } from "react-router";
import Leaut from "./Leaut/leaut";

import About from "./pages/About";
import Home from "./pages/Home";
import Pageid from "./pages/Pageid";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Leaut/>}>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/product/:productid" element={<Pageid />} />
      </Route>
    </Routes>
  );
};

export default App;
