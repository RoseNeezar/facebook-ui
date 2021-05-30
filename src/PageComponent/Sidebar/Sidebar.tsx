import React from "react";
import SidebarNavigation from "./component/SidebarNavigation";
import SidebarShortCut from "./component/SidebarShortCut";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex-col hidden w-1/5 h-full pt-16 xl:flex">
      <ul className="p-4">
        <SidebarNavigation />
      </ul>

      <div className="flex items-center justify-between h-4 px-4 group">
        <span className="text-lg font-semibold text-gray-500 dark:text-dark-txt">
          Your shortcuts
        </span>
        <span className="hidden p-2 text-blue-500 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third group-hover:inline-block">
          Edit
        </span>
      </div>

      <ul className="p-4">
        <SidebarShortCut />
      </ul>
    </div>
  );
};

export default Sidebar;
