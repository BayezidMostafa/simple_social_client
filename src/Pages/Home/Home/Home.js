import React from "react";
import AllPost from "../AllPost/AllPost";
import Post from "../Post/Post";
import UserProfile from "../UserProfile/UserProfile";

const Home = () => {
  return (
    <div>
      <UserProfile />
      <Post />
      <AllPost />
    </div>
  );
};

export default Home;
