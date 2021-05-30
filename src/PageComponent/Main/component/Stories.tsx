import React, { useState } from "react";

const Stories = () => {
  const [stories, setStories] = useState([1, 1, 1, 1, 1]);
  return (
    <div className="relative flex pt-4 space-x-2">
      <div className="flex flex-col w-1/4 overflow-hidden shadow cursor-pointer sm:w-1/6 h-44 rounded-xl group">
        <div className="overflow-hidden h-3/5">
          <img
            src="./images/profile.jpg"
            alt="picture"
            className="transition-all duration-700 group-hover:transform group-hover:scale-110"
          />
        </div>
        <div className="relative flex items-end justify-center flex-1 pb-2 leading-none text-center dark:bg-dark-second dark:text-dark-txt">
          <span className="font-semibold">
            Create a <br /> Story
          </span>
          <div className="absolute grid w-10 h-10 text-2xl text-white transform -translate-x-1/2 bg-blue-500 border-4 border-white rounded-full place-items-center dark:border-dark-second -top-5 left-1/2">
            <i className="bx bx-plus"></i>
          </div>
        </div>
      </div>
      {stories.map((res) => (
        <div className="w-1/4 overflow-hidden sm:w-1/6 h-44 rounded-xl">
          <div className="relative h-full cursor-pointer group">
            <img
              src="./images/story.jpg"
              alt="Story images"
              className="w-full h-full transition-all duration-700 group-hover:transform group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
            <span className="absolute bottom-0 pb-2 font-semibold text-white left-2">
              Your story
            </span>
            <div className="absolute w-10 h-10 overflow-hidden border-4 border-blue-500 rounded-full top-2 left-2">
              <img src="./images/ember.png" alt="Profile picture" />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute hidden w-12 h-12 text-2xl text-gray-500 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow cursor-pointer lg:grid place-items-center -right-6 top-1/2 hover:bg-gray-100 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
        <i className="bx bx-right-arrow-alt"></i>
      </div>
    </div>
  );
};

export default Stories;
