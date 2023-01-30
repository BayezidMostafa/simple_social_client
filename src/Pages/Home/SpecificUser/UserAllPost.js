import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";

const UserAllPost = ({ post }) => {
  const { title, image, info, time } = post;
  return (
    <div className="">
      <div className="flex justify-between">
        <Typography variant="h5">{title}</Typography>
        <Avatar src={image} alt="" />
      </div>
      <Typography className="text-justify">{info.slice(0, 300)}</Typography>
      <Typography variant="small">
        <span className="font-semibold">Post time:</span> {time}
      </Typography>
    </div>
  );
};

export default UserAllPost;
