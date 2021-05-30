import React from "react";

const PostStats = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-row-reverse items-center">
        <span className="ml-2 text-gray-500 dark:text-dark-txt">999</span>
        <span className="grid -ml-1 text-2xl text-red-800 rounded-full place-items-center">
          <i className="bx bxs-angry"></i>
        </span>
        <span className="grid -ml-1 text-2xl text-red-500 rounded-full place-items-center">
          <i className="bx bxs-heart-circle"></i>
        </span>
        <span className="grid -ml-1 text-2xl text-yellow-500 rounded-full place-items-center">
          <i className="bx bx-happy-alt"></i>
        </span>
      </div>
      <div className="text-gray-500 dark:text-dark-txt">
        <span>90 comments</span>
        <span> 66 Shares</span>
      </div>
    </div>
  );
};

export default PostStats;
