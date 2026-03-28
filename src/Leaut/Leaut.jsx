import { Outlet, Link } from "react-router-dom";

const Leaut = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between px-10 py-4 shadow">
        <h1 className="font-bold text-xl">MANIFOLD</h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
        </div>
      </div>

      {/* Pages */}
      <Outlet />
    </div>
  );
};

export default Leaut;