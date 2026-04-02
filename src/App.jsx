import { Routes, Route } from "react-router";
import About from "./page/About";
import Layout from "./Leaut/Leaut";
import Counter from "./page/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="/" element={<Counter />} />
      <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}