import SearchBar from "./SearchBar";
import youtube from "../assets/youtube.svg";
import youtubeDark from "../assets/youtubeDark.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme:dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handlerTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-10 dark:bg-black">
        <div className=" flex h-16 items-center mx-4">
          <div className="flex">
            <Link to="/" className="">
              <img
                className="h-6 w-auto"
                src={theme === "dark" ? youtubeDark : youtube}
                alt="Your Company"
              />
            </Link>
          </div>

          <SearchBar />
          <div
            className="hover:cursor-pointer m-4"
            onClick={() => handlerTheme()}
          >
            {theme === "dark" ? (
              <div className="bg-gray-700 p-2 rounded-lg">
                <MdLightMode className="text-xl text-white" />
              </div>
            ) : (
              <div className="bg-slate-100 p-2 rounded-lg">
                <MdModeNight className="text-xl" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
