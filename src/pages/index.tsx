import React from "react";
import Main from "../PageComponent/Main/Main";
import Sidebar from "../PageComponent/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="fixed top-0 left-0 flex-col hidden w-1/5 h-full pt-16 xl:flex">
        <Sidebar />
      </div>

      <div className="w-full px-2 pt-32 lg:w-2/3 xl:w-2/5 lg:pt-16">
        <Main />
      </div>
    </div>
  );
};

export default Home;
