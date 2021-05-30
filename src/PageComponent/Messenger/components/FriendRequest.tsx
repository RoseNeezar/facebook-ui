import React from "react";

const FriendRequest = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4">
        <span className="text-lg font-semibold text-gray-500 dark:text-dark-txt">
          Friend requests
        </span>
        <span className="p-2 text-blue-500 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third">
          See All
        </span>
      </div>
      <div className="p-2">
        <a
          href="#"
          className="flex items-center p-2 space-x-4 transition-all rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third"
        >
          <img
            src="./images/avt.jpg"
            alt="Profile picture"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1 h-full">
            <div className="dark:text-dark-txt">
              <span className="font-semibold">Sakura Hinata</span>
              <span className="float-right">6d</span>
            </div>
            <div className="flex mt-2 space-x-2">
              <div className="w-1/2 py-1 font-semibold text-center text-white bg-blue-500 rounded-lg cursor-pointer">
                Confirm
              </div>
              <div className="w-1/2 py-1 font-semibold text-center text-black bg-gray-300 rounded-lg cursor-pointer">
                Delete
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default FriendRequest;
