import React from "react";
import NavActions from "./component/NavActions";
import NavNavigate from "./component/NavNavigate";
import NavSearch from "./component/NavSearch";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex flex-col items-center justify-center w-full max-h-full bg-white border-b shadow dark:bg-dark-second md:h-14 md:flex-row md:justify-between dark:border-dark-third">
      <NavSearch />
      <NavNavigate />
      <NavActions />
    </nav>
  );
};

export default Navbar;
