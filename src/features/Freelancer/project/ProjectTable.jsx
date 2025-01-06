import React from "react";
import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import ProjectRow from "./ProjectRow";

const ProjectsTable = () => {
  const { projects, isLoading } = useProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
