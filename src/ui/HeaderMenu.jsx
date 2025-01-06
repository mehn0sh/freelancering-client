import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

const HeaderMenu = () => {
  const [open, setopen] = useState();
  return (
    <div className="max-sm:relative block max-sm:w-full  ">
      <button onClick={()=>setopen(!open)} className=" max-sm:absolute -top-3 left-5  sm:hidden  ">
        <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-7">
          <img
            src={`/images/${open ? "close" : "magictouch"}.svg`}

            alt={""}
            className="size-6 object-contain z-20"
          />
        </div>
      </button>
      <div className="block  ">
      <ul className={` transition-opacity duration-500 max-sm:bg-red-50 top-6 max-sm:px-7 max-sm:rounded-lg  left-3 flex items-center gap-x-1  max-sm:flex-col max-sm:absolute ${
            open ? "max-sm:opacity-100" : "max-sm:pointer-events-none max-sm:opacity-0"
          } `}>
        <li>
          <Link to={"dashboard"}>
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </Link>
        </li>
        <li className="flex">
          <DarkModeToggle />
        </li>
        <li className="flex">
          <Logout />
        </li>
      </ul>

      </div>
    </div>
  );
};

export default HeaderMenu;
