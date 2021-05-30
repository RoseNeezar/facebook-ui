import React from "react";
import PostActions from "./subComponents/PostActions";
import PostCommentForm from "./subComponents/PostCommentForm";
import PostComments from "./subComponents/PostComments";
import PostContent from "./subComponents/PostContent";
import PostOP from "./subComponents/PostOP";
import PostStats from "./subComponents/PostStats";

const Post = () => {
  return (
    <div className="mt-4 bg-white rounded-lg shadow dark:bg-dark-second dark:text-dark-txt">
      <PostOP />
      <PostContent />
      <div className="px-4 py-2">
        <PostStats />
      </div>
      <div className="px-4 py-2">
        <PostActions />
      </div>
      <div className="px-4 py-2">
        <PostComments />
      </div>

      <div className="px-4 py-2">
        <PostCommentForm />
      </div>
    </div>
  );
};

export default Post;
