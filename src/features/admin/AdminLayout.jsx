import React from "react";
import AppLayout from "../../ui/AppLayout";
import { CustomNavlink } from "../../ui/CustomNavlink";
import SideBar from "../../ui/SideBar";
import { HiCollection, HiHome,HiUser,HiOutlineViewGrid } from "react-icons/hi";


const AdminLayout = () => {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="users">
          <HiUser />
          <span>کاربران</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span className="text-sm">درخواستها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
};

export default AdminLayout;
