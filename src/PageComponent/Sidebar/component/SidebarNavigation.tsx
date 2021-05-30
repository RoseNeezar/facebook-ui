import React from "react";

const SidebarNavigation = () => {
  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center p-2 space-x-2 transition-all rounded-lg hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third"
        >
          <img
            src="./images/friends.png"
            alt="Profile picture"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Friends</span>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center p-2 space-x-2 transition-all rounded-lg hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third"
        >
          <span className="grid w-10 h-10 bg-gray-300 rounded-full place-items-center dark:bg-dark-second">
            <i className="bx bx-chevron-down"></i>
          </span>
          <span className="font-semibold">See more</span>
        </a>
      </li>
      <li className="mt-6 border-b border-gray-200 dark:border-dark-third"></li>
    </>
  );
};

export default SidebarNavigation;
