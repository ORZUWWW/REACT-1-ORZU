import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Layout from "./Leaut/Leaut";
import Info from "./component/info";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="info/:id" element={<Info />} />
      </Route>
    </Routes>
  );
}