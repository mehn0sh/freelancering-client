import React, { useState } from "react";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const ProposalRow = ({ index, proposal }) => {
  const [open, setOpen] = useState(false);
  const statusStyle = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];
  return (
    <tr >
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        <p>{proposal.description}</p>
      </td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td className={` mt-3 badge ${statusStyle[proposal.status].className}`}>
        {statusStyle[proposal.status].label}
      </td>
      <td>
        <Modal
          title={"تغییر وضعیت درخواست"}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)} className='btn bg-secondary-200'>تغییر وضعیت درخواست</button>
      </td>
    </tr>
  );
};

export default ProposalRow;
