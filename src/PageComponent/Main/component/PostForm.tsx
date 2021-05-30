import React from "react";

const PostForm = () => {
  return (
    <div className="px-4 mt-4 bg-white rounded-lg shadow dark:bg-dark-second">
      <div className="flex p-2 space-x-4 border-b border-gray-300 dark:border-dark-third">
        <img
          src="./images/ember.png"
          alt="Profile picture"
          className="object-cover w-10 h-10 rounded-full"
        />
        <div className="flex items-center justify-start flex-1 pl-4 text-lg text-gray-500 bg-gray-100 rounded-full cursor-pointer dark:bg-dark-third dark:text-dark-txt">
          <span>What's on your mind, Ember?</span>
        </div>
      </div>
      <div className="flex p-2">
        <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-red-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third sm:text-3xl">
          <i className="bx bxs-video-plus"></i>
          <span className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-dark-txt">
            Live video
          </span>
        </div>
        <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-green-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third sm:text-3xl">
          <i className="bx bx-images"></i>
          <span className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-dark-txt">
            Live video
          </span>
        </div>
        <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-yellow-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third sm:text-3xl">
          <i className="bx bx-smile"></i>
          <span className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-dark-txt">
            Live video
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
