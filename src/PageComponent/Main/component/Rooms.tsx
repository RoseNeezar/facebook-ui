import React, { useState } from "react";

const Rooms = () => {
  const [rooms, _] = useState([1, 1, 1, 1, 1, 1, 1]);
  return (
    <div className="p-4 mt-4 overflow-hidden bg-white rounded-lg shadow dark:bg-dark-second">
      <div className="relative flex space-x-4">
        <div className="flex items-center justify-center w-1/2 space-x-2 border-2 border-blue-200 rounded-full cursor-pointer lg:w-3/12 dark:border-blue-700">
          <i className="text-2xl text-purple-500 bx bxs-video-plus"></i>
          <span className="text-sm font-semibold text-blue-500">
            Create Room
          </span>
        </div>
        {rooms.map((res) => (
          <div className="relative cursor-pointer">
            <img
              src="./images/avt.jpg"
              alt="Profile picture"
              className="rounded-full"
            />
            <span className="absolute right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full top-3/4"></span>
          </div>
        ))}
        <div className="absolute right-0 hidden w-12 h-12 text-2xl text-gray-500 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow cursor-pointer lg:grid place-items-center top-1/2 hover:bg-gray-100 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
          <i className="bx bxs-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
