import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const AppLayout = ({children}) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen grid-cols-[40%_1fr] sm:grid-cols-[15rem_1fr]  ">
      <Header />
      {children}
      <div className="bg-secondary-100 overflow-auto p-8">
        <div className=" mx-auto max-w-screen-lg flex flex-col gap-y-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
