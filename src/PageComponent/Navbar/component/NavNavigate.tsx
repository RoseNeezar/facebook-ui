import React from "react";

const NotificationBadge = () => {
  return (
    <span className="absolute top-0 px-1 text-xs font-semibold text-center text-white bg-red-500 rounded-full right-1/4">
      90+
    </span>
  );
};

const NavNavigate = () => {
  return (
    <>
      <ul className="flex items-center justify-center w-full lg:w-max">
        <li className="w-1/5 text-center md:w-max">
          <a
            href="#"
            className="inline-block w-full px-3 py-2 text-3xl text-center text-blue-500 border-b-4 border-blue-500 cursor-pointer xl:px-12"
          >
            <i className="bx bxs-home"></i>
          </a>
        </li>
        <li className="w-1/5 text-center md:w-max">
          <a
            href="#"
            className="relative inline-block w-full px-3 py-2 text-3xl text-center text-gray-600 rounded cursor-pointer xl:px-12 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt"
          >
            <i className="bx bx-movie-play"></i>
            <NotificationBadge />
          </a>
        </li>
        <li className="w-1/5 text-center md:w-max">
          <a
            href="#"
            className="relative inline-block w-full px-3 py-2 text-3xl text-center text-gray-600 rounded cursor-pointer xl:px-12 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt"
          >
            <i className="bx bx-store"></i>
          </a>
        </li>
        <li className="w-1/5 text-center md:w-max">
          <a
            href="#"
            className="relative inline-block w-full px-3 py-2 text-3xl text-center text-gray-600 rounded cursor-pointer xl:px-12 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt"
          >
            <i className="bx bx-group"></i>
          </a>
        </li>
        <li className="hidden w-1/5 text-center md:w-max md:inline-block">
          <a
            href="#"
            className="relative inline-block w-full px-3 py-2 text-3xl text-center text-gray-600 rounded cursor-pointer xl:px-12 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt"
          >
            <i className="bx bx-layout"></i>
            <NotificationBadge />
          </a>
        </li>
        <li className="inline-block w-1/5 text-center md:w-max md:hidden">
          <a
            href="#"
            className="relative inline-block w-full px-3 py-2 text-3xl text-center text-gray-600 rounded cursor-pointer xl:px-12 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt"
          >
            <i className="bx bx-menu"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavNavigate;
