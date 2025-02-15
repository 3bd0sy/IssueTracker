import { useEffect, useState } from "react";
import Button from "./Button";
import ListItem from "./ListItem";
import { logout } from "../../Services/authService";
const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);
  const handleLogout = async () => {
    try {
      logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <header className=" w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Issue Tracker
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Button path="" onClick={() => null}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </Button>
            {isAuthenticated ? (
              <Button path={"/guest"} onClick={handleLogout}>
                Log out
              </Button>
            ) : (
              <>
                <Button path={"/Login"} onClick={() => null}>
                  Log in
                </Button>
                <Button path={"/Register"} onClick={() => null}>
                  Register
                </Button>
              </>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {isAuthenticated && (
                <>
                  <ListItem path="/">Home</ListItem>
                  <ListItem path="/add">Add Issue</ListItem>
                  <ListItem path="/savedissue">Saved Issue</ListItem>
                  <ListItem path="/about">About</ListItem>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
