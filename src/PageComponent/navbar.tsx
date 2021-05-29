import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="">
        <a href="#">
          <img src="/logo.png" alt="logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#">
            <i className="bx bxs-home"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-movie-play"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-store"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-group"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-layout"></i>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img src="/logo.png" alt="Profile" />
            <span>Sudo</span>
          </a>
        </li>
        <li>
          <div>
            <i className="bx bx-plus"></i>
          </div>
        </li>
        <li>
          <div>
            <i className="bx bxl-messenger"></i>
          </div>
        </li>
        <li>
          <div>
            <i className="bx bxs-bell"></i>
          </div>
        </li>
        <li>
          <div>
            <i className="bx bxs-moon"></i>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
