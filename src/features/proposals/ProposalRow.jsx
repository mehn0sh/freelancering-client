import React from "react";

const ProposalRow = ({ proposal, index }) => {
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
    <tr key={proposal._id}>
      <td>{index + 1}</td>
      <td className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        <span>{proposal.description}</span>
      </td>
        <td>{proposal.duration.toLocaleString("fa")} روز</td>
      <td>{proposal.price.toLocaleString("fa")}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </tr>
  );
};

export default ProposalRow;
