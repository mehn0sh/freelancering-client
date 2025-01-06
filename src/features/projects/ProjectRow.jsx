import React, { useState } from "react";
import Modal from "../../ui/Modal";
import { useRemoveProject } from "./useRemoveProject";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

const ProjectRow = ({ project, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
  return (
    <tr key={project._id}>
      <td>{index + 1}</td>
      <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        <span>{project.title}</span>
      </td>
      <td>{project.category.title}</td>
      <td>{project.budget.toLocaleString("fa")}</td>
      <td>{new Date(project.deadline).toLocaleDateString("fa-IR")}</td>
      <td>
        <div className="flex flex-wrap max-w-[200px] items-center gap-2">
          {project.tags.map((tag, index) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      <td>
        {/* {project.status == "open" ? (
          <span className="badge--success badge">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )} */}
        <ToggleProjectStatus project={project}/>
      </td>
      <td>
        <div className="flex gap-x-4 items-center">
          <>
            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={`ویرایش ${project.title}`}
            >
              <CreateProjectForm onClose={() => setIsEditOpen(false)} projectToEdit={project} />
            </Modal>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-800" />
            </button>
          </>
          <>
            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف${project.title}`}
            >
              <ConfirmDelete
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: (data) => setIsDeleteOpen(false),
                  })
                }
                title={project.title}
                onClose={() => setIsDeleteOpen(false)}
              />
            </Modal>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
          </>
        </div>
      </td>
      <td>
      <Link to={`${project._id}`} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-800" />        
        </Link>
      </td>
    </tr>
  );
};

export default ProjectRow;
