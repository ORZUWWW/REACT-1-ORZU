import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <nav className="flex justify-between items-center p-5 bg-gray-200">
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex gap-3">
          <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;