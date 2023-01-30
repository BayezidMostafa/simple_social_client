import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home/Home";
import SpecificPost from "../Pages/Home/SpecificPost/SpecificPost";
import SpecificUser from "../Pages/Home/SpecificUser/SpecificUser";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/posts/:id",
        element: <SpecificPost />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
      {
        path: "/users/:username",
        element: <SpecificUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.username}`),
      },
    ],
  },
]);
