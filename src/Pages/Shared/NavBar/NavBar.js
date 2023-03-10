import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const NavBar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  console.log(user);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as={Link} to="" color="white">
        Home
      </Typography>
    </ul>
  );

  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .then((err) => {
        console.error(err.message);
      });
  };

  return (
    <Navbar
      color="cyan"
      variant="gradient"
      className="mx-auto py-2 px-4 lg:px-8 lg:py-4 rounded-none lg:rounded-md"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h5"
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Explore</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {user?.uid ? (
          <>
            <Button
              onClick={handleLogOut}
              variant="gradient"
              color="yellow"
              size="md"
              className="hidden lg:inline-block"
            >
              <span className="text-gray-900">Sign Out</span>
            </Button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <Button
                variant="gradient"
                color="yellow"
                size="md"
                className="hidden lg:inline-block"
              >
                <span className="text-gray-900">Sign In</span>
              </Button>
            </Link>
          </>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {user?.uid ? (
            <>
              <Button
                onClick={handleLogOut}
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2"
              >
                <span>Sign Out</span>
              </Button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                  <span>Sign In</span>
                </Button>
              </Link>
            </>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
