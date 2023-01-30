import { Avatar, Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SpecificPost = () => {
  const post = useLoaderData();
  const { image, title, name: username, info, time, email } = post;
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="lg:flex justify-between lg:w-[68.5%] mx-auto p-10">
        <div className="lg:w-[80%]">
          <Typography variant="h5">{title}</Typography>
          <Typography className="text-justify">{info}</Typography>
        </div>
        <div className="lg:w-[20%] flex flex-col justify-center items-center">
          <Avatar size="xxl" src={image} alt="" />
          <Typography>{username}</Typography>
          <Typography>{email}</Typography>
          <Link to={`/users/${username}`}>
            <Button color="yellow">View Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecificPost;
