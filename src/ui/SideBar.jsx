import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <div className="bg-secondary-0 row-span-2 row-start-1 p-3 border-l border-secondary-200">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
};

export default SideBar;
