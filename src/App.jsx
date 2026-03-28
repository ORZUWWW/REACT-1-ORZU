import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaut from "./Leaut/Leaut";
import Home from "./Page/Home";
import Todo from "./Page/Todo";
import Info from "./Page/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leaut />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="info/:id" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;