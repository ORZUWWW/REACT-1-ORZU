import { Routes, Route } from "react-router";
import Home from "./page/Home";
import About from "./Page/Info";
import Layout from "./Leaut/Leaut";
import Info from "./Page/Info";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="/" element={<Home />} />
      <Route path="/info/:id" element={<Info />} />
      </Route>
    </Routes>
  );
}