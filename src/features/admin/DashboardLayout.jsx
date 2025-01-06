import React from "react";
import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

const DashboardLayout = () => {
  const { proposals, isLoading: proposalsLoading } = useProposals();
  const { projects, isLoading: ProjectsLoading } = useProjects();
  const { users, isLoading:usersLoading }= useUsers()
  if (proposalsLoading || ProjectsLoading || usersLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects.length} proposals={proposals.length} users={users.length}/>
    </div>
  );
};

export default DashboardLayout;
