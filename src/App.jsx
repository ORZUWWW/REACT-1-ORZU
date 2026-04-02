import { Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Layout from "./Leaut/Leaut";
import Counter from "./Page/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Counter />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}