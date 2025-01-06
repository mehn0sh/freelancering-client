import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { HiCollection, HiHome } from "react-icons/hi";
import { CustomNavlink } from "../../ui/CustomNavlink";

const OwnerLayout = () => {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to={"/owner/dashboard"}>
          <HiHome />
          <span> خانه</span>
        </CustomNavlink>
        <CustomNavlink to={"/owner/projects"}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
};

export default OwnerLayout;
