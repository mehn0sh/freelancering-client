import React, { useState } from "react";
import {MdAssignment} from 'react-icons/md'
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const ProjectRow = ({ project, index }) => {
    const [open, setopen] = useState(false);

    const {status}=project
    const projectStatus={
        OPEN:{
            label: "باز",
            className: "badge--success",
        },
        CLOSED: {
            label: "بسته",
            className: "badge--danger",
          },
    }
  return (
    <tr key={project._id}>
      <td>{index + 1}</td>
      <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        <span>{project.title}</span>
      </td>
      <td>{project.budget.toLocaleString("fa")}</td>
      <td>{new Date(project.deadline).toLocaleDateString("fa-IR")}</td>
      <td>
        
        <span className={`badge ${projectStatus[status].className}`}>
            {projectStatus[status].label}
        </span>
      </td>
      <td>
      <Modal open={open} onClose={()=>setopen(false)} title={`در خواست انجام پروژه ${project.title}`}>
            <CreateProposal projectId={project._id} onClose={()=>setopen(false)}/>
        </Modal>
      <button onClick={()=>setopen(true)}>
            <MdAssignment className="w-5 h-5 text-primary-900"/>
        </button>
      </td>
    </tr>
  );
};

export default ProjectRow;
