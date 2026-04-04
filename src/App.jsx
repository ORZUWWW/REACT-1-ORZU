import { Routes, Route } from "react-router-dom";
import Layout from "./Leaut/Leaut";
import Home from "./Page/Home";
import About from "./Page/About";
import Info from "./Page/Info";
import User from "./Page/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;