import React from "react";
import Loading from "../../ui/Loading";
import { useLogOut } from "./useLogOut";
import {HiArrowRightOnRectangle }from 'react-icons/hi2'

const Logout = () => {
  const { isPending, logOut } = useLogOut();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logOut}>
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
};

export default Logout;
