import React from "react";
import Contacts from "./components/Contacts";
import FriendRequest from "./components/FriendRequest";

const Messenger = () => {
  return (
    <div className="h-full">
      <FriendRequest />
      <div className="mt-6 border-b border-gray-200 dark:border-dark-third"></div>
      <Contacts />
    </div>
  );
};

export default Messenger;
