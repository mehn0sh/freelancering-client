import React from 'react'
import AppLayout from '../../ui/AppLayout'
import SideBar from '../../ui/SideBar'
import { HiCollection, HiHome } from "react-icons/hi";
import { CustomNavlink } from '../../ui/CustomNavlink';

const FreelancerLayout = () => {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout> 
     )
}

export default FreelancerLayout