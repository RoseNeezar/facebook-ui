import React from "react";

const PostOP = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <img
            src="./images/avt-3.jpg"
            alt="Profile picture"
            className="w-10 h-10 rounded-full"
          />
          <span className="absolute right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full top-3/4"></span>
        </div>
        <div>
          <div className="font-semibold">John Doe</div>
          <span className="text-sm text-gray-500">38m</span>
        </div>
      </div>
      <div className="grid w-8 h-8 text-xl text-gray-500 rounded-full cursor-pointer place-items-center hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third">
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>
    </div>
  );
};

export default PostOP;
