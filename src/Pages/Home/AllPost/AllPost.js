import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data: allPosts = [], refetch } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/allpost");
      return res.data;
    },
  });
  console.log(allPosts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-[68.5%] mx-auto gap-5 mt-10">
      {allPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default AllPost;
