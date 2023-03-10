import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserInfo, loading, setLoading } =
    useContext(AuthContext);

  const handleSignup = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const dob = form.dob.value;
    const image = form.image.files[0];
    const password = form.password.value;
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api_key}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        const image = imgData?.data.display_url;
        console.log(image);
        createUser(email, password)
          .then((data) => {
            const profile = {
              displayName: name,
              photoURL: image,
            };
            updateUserInfo(profile)
              .then(() => {})
              .catch((err) => {
                setLoading(false);
                console.error(err.message);
              });
            const userData = {
              name,
              image,
              email,
              dob,
            };
            axios
              .put("http://localhost:5000/users", userData)
              .then((res) => {
                console.log(res.data);
                setLoading(false);
                toast.success("Account Created Successfully");
                form.reset();
              })
              .catch((err) => {
                console.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  };

  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <div className="min-h-[80vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 rounded-md shadow-md sm:p-5">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your Explore account
            </h2>
          </div>
          <form
            onSubmit={handleSignup}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="user-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="user-name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="user-age" className="sr-only">
                  Date of Birth
                </label>
                <input
                  id="user-dob"
                  name="dob"
                  type="date"
                  autoComplete="dob"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Date of Birth"
                />
              </div>
              <div>
                <label htmlFor="user-image" className="sr-only">
                  Profile Image
                </label>
                <input
                  id="user-image"
                  name="image"
                  type="file"
                  autoComplete="image"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Profile Image"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-600
                                    focus:outline-none focus:ring-cyan-600 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <Button type="submit" fullWidth color="cyan">
                Sign up
              </Button>
            </div>
            <Typography className="text-center">
              Already have an account?
              <Link className="ml-1 underline" to="/signin">
                Sign in
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
