import React from "react";
import UserAvatar from "../features/authentication/UserAvatar";
import UseUser from "../features/authentication/UseUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { data, isLoading } = UseUser();
  return (
    <div className=" px-2 py-4 bg-secondary-0  border-b border-secondary-200">
      <div
        className={`  container xl:max-w-screen-xl flex justify-between sm:gap-x-4 items-center ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <UserAvatar/>

        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
