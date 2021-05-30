import React from "react";

const PostComments = () => {
  return (
    <div className="flex space-x-2">
      <img
        src="./images/avt-5.jpg"
        alt="Profile picture"
        className="rounded-full w-9 h-9"
      />
      <div>
        <div className="p-2 text-sm bg-gray-100 dark:bg-dark-third rounded-2xl">
          <span className="block font-semibold">John Doe</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
          <span className="font-semibold cursor-pointer">Like</span>
          <span>.</span>
          <span className="font-semibold cursor-pointer">Reply</span>
          <span>.</span>
          10m
        </div>

        <div className="flex space-x-2">
          <img
            src="./images/avt-7.jpg"
            alt="Profile picture"
            className="rounded-full w-9 h-9"
          />
          <div>
            <div className="p-2 text-sm bg-gray-100 dark:bg-dark-third rounded-2xl">
              <span className="block font-semibold">John Doe</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
              <span className="font-semibold cursor-pointer">Like</span>
              <span>.</span>
              <span className="font-semibold cursor-pointer">Reply</span>
              <span>.</span>
              10m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
