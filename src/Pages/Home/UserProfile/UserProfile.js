import { Avatar, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return user?.uid ? (
    <>
      <div className="lg:flex justify-between lg:max-w-[68.5%] py-5 mx-auto shadow-sm mt-5 rounded-md">
        <div className="flex flex-col justify-center items-center lg:w-[50%] mx-auto">
          <Avatar src={user?.photoURL} size="xxl" />
          <Typography variant="h5">{user?.displayName}</Typography>
        </div>
        <div className="sm:flex text-center justify-between items-center lg:w-[100%] px-5">
          <p>Total Post:</p>
          <p>Following:</p>
          <p>Follower:</p>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default UserProfile;
