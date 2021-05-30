import React from "react";

const PostActions = () => {
  return (
    <div className="py-1 border border-l-0 border-r-0 border-gray-200 dark:border-dark-third">
      <div className="flex space-x-2">
        <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt">
          <i className="bx bx-like"></i>
          <span className="text-sm font-semibold">Like</span>
        </div>
        <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt">
          <i className="bx bx-comment"></i>
          <span className="text-sm font-semibold">Comment</span>
        </div>
        <div className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt">
          <i className="bx bx-share bx-flip-horizontal"></i>
          <span className="text-sm font-semibold">Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostActions;
