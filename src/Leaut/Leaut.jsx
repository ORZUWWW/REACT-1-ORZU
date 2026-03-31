import React from "react";
import { Link, Outlet } from "react-router";
import { useTranslation } from "react-i18next";

const Layout = () => {
  
const { t, i18n } = useTranslation();
  return (
    <div>
    <nav>
<Link to={"/"} >Home</Link>
<Link to={"/About"} >About</Link>
<div>

  <button onClick={() => i18n.changeLanguage("ru")}>
        RU
      </button>

      <button onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
</div>
    </nav>
    <Outlet />
    </div>
  );
};

export default Layout;