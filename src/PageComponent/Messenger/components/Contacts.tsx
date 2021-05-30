import React, { useState } from "react";

const Contacts = () => {
  const [contact, setContact] = useState([1, 1, 1]);
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4 text-gray-500 dark:text-dark-txt">
        <span className="text-lg font-semibold">Contacts</span>
        <div className="flex space-x-1">
          <div className="grid w-8 h-8 text-xl rounded-full cursor-pointer place-items-center hover:bg-gray-200 dark:hover:bg-dark-third">
            <i className="bx bx-search-alt-2"></i>
          </div>
          <div className="grid w-8 h-8 text-xl rounded-full cursor-pointer place-items-center hover:bg-gray-200 dark:hover:bg-dark-third">
            <i className="bx bx-dots-horizontal-rounded"></i>
          </div>
        </div>
      </div>
      <ul className="p-2">
        {contact.map((res) => (
          <li>
            <div className="flex items-center p-2 space-x-4 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt">
              <div className="relative">
                <img
                  src="./images/avt.jpg"
                  alt="Friends profile picture"
                  className="rounded-full"
                />
                <span className="absolute right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full top-3/4"></span>
              </div>
              <div>
                <span className="font-semibold">Chin Chin</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
