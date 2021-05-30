import React from "react";

const NavSearch = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 md:w-max">
      <a href="#" className="hidden mr-2 md:inline-block">
        <img
          src="/images/fb-logo.png"
          alt="Facebook logo"
          className="w-24 h-auto sm:w-20 lg:w-10"
        />
      </a>
      <a href="#" className="inline-block md:hidden">
        <img src="/images/fb-logo-mb.png" alt="" className="w-32 h-auto" />
      </a>
      <div className="flex items-center justify-between space-x-1">
        <div className="relative flex items-center justify-center w-10 h-10 px-2 py-2 bg-gray-100 rounded-full cursor-pointer dark:bg-dark-third sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8">
          <i className="text-xl bx bx-search-alt-2 xl:mr-2 dark:text-dark-txt"></i>
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden bg-transparent outline-none xl:inline-block"
          />
        </div>
        <div className="grid w-10 h-10 text-2xl bg-gray-200 rounded-full cursor-pointer place-items-center md:hidden dark:bg-dark-third hover:bg-gray-300 dark:text-dark-txt">
          <i className="bx bxl-messenger"></i>
        </div>
        <div
          className="grid w-10 h-10 text-2xl bg-gray-200 rounded-full cursor-pointer place-items-center md:hidden dark:bg-dark-third hover:bg-gray-300 dark:text-dark-txt"
          id="dark-mode-toggle-mb"
        >
          <i className="bx bxs-moon"></i>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
