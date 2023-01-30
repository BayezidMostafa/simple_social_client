import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { title, name, info, email, image, time, _id } = post;
  console.log(_id);
  return (
    <Link to={`posts/${_id}`} className="hover:shadow rounded duration-300 p-5">
      <div className="">
        <div className="flex justify-between">
          <Typography variant="h5">{title}</Typography>
          <Avatar src={image} alt="" />
        </div>
        <Typography className="text-justify">{info.slice(0, 300)}</Typography>
        <Typography variant="small">
          <span className="font-semibold">Post time:</span> {time}
        </Typography>
        <Typography variant="small">
          <span className="font-semibold">Email:</span> {email}
        </Typography>
      </div>
    </Link>
  );
};

export default PostCard;
