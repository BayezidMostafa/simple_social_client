import { Button, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const Post = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const handlePost = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const info = form.info.value;
    const time = new Date().toLocaleString();
    const post = {
      title,
      name: user?.displayName,
      info,
      email: user?.email,
      image: user?.photoURL,
      time,
    };
    console.log(post);
    axios
      .put("http://localhost:5000/posts", post)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        form.reset();
        toast.success("Post successfully");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full lg:w-[68.5%] m-auto mt-5">
      <form onSubmit={handlePost}>
        <div className="mb-2">
          <Input required name="title" color="cyan" label="Post title" />
        </div>
        <div>
          <Textarea required name="info" color="cyan" label="Post info" />
        </div>
        <div className="text-right">
          {user?.uid ? (
            <>
              {loading ? (
                <>
                  <Button disabled type="submit" className="" color="yellow">
                    Posting
                  </Button>
                </>
              ) : (
                <>
                  <Button type="submit" className="" color="yellow">
                    Post
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              <Button disabled type="submit" className="" color="yellow">
                Post
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Post;
