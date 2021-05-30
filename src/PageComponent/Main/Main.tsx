import React from "react";
import Post from "./component/Post/Post";
import PostForm from "./component/PostForm";
import Rooms from "./component/Rooms";
import Stories from "./component/Stories";

const Main = () => {
  return (
    <>
      <Stories />
      <PostForm />
      <Rooms />
      <Post />
    </>
  );
};

export default Main;
