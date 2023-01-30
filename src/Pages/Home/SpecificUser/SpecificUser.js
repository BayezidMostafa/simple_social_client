import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import UserAllPost from "./UserAllPost";

const SpecificUser = () => {
  const user = useLoaderData();
  const { data: userInfo = [], refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/allpost/${user?.email}`
      );
      return res.data;
    },
  });

  console.log(userInfo);
  return (
    <>
      <div className="lg:flex justify-evenly items-center lg:w-[68.5%] mx-auto">
        <div>
          <img
            className="lg:w-[50%] mx-auto lg:mb-0 mb-7"
            src={user?.image}
            alt=""
          />
        </div>
        <div className="text-center">
          <Typography className="text-base md:text-xl font-semibold">
            User Name: {user?.name}
          </Typography>
          <Typography className="text-base md:text-lg ">
            User Email:{user?.email}
          </Typography>
          <Typography className="text-base md:text-lg ">
            Total blog Post: {userInfo.length}
          </Typography>
        </div>
      </div>
      <div className="lg:w-[68.5%] my-10 mx-auto">
        <Typography variant="h3">All blog post from this user</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[68.5%] mx-auto mt-5">
        {userInfo.map((post) => (
          <UserAllPost post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default SpecificUser;
