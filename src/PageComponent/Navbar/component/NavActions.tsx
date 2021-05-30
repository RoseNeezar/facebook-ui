import React from "react";

const NavActions = () => {
  return (
    <>
      <ul className="items-center justify-center hidden mx-4 md:flex">
        <li className="hidden h-full xl:flex">
          <a
            href="#"
            className="inline-flex items-center justify-center p-1 mx-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third"
          >
            <img
              src="./images/tuat.png"
              alt="Profile picture"
              className="object-cover rounded-full h-7 w-7"
            />
            <span className="mx-2 font-semibold dark:text-dark-txt">Ember</span>
          </a>
        </li>
        <li>
          <div className="relative hidden p-3 mx-1 text-xl bg-gray-200 rounded-full cursor-pointer xl:grid place-items-center dark:bg-dark-third dark:text-dark-txt hover:bg-gray-300">
            <i className="bx bx-plus"></i>
          </div>
        </li>
        <li>
          <div className="relative hidden p-3 mx-1 text-xl bg-gray-200 rounded-full cursor-pointer xl:grid place-items-center dark:bg-dark-third dark:text-dark-txt hover:bg-gray-300">
            <i className="bx bxl-messenger"></i>
          </div>
        </li>
        <li>
          <div className="relative grid p-3 mx-1 text-xl bg-gray-200 rounded-full cursor-pointer place-items-center dark:bg-dark-third dark:text-dark-txt hover:bg-gray-300">
            <i className="bx bxs-bell"></i>
            <span className="absolute top-0 right-0 px-1 text-xs font-semibold text-center text-white bg-red-500 rounded-full">
              9
            </span>
          </div>
        </li>
        <li>
          <div
            className="relative grid p-3 mx-1 text-xl bg-gray-200 rounded-full cursor-pointer place-items-center dark:bg-dark-third dark:text-dark-txt hover:bg-gray-300"
            id="dark-mode-toggle"
          >
            <i className="bx bxs-moon"></i>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavActions;
