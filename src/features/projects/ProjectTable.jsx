import React, { useState } from "react";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProject";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { useRemoveProject } from "./useRemoveProject";
import ProjectRow from "./ProjectRow";

const ProjectTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
            <ProjectRow key={project._id} project={project} index={index}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
