import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Layout from "./Leaut/Leaut";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}