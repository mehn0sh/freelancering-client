import React from "react";
import Empty from "../../ui/Empty";
import ProposalRow from "./ProposalRow";

const ProposalTable = ({proposals}) => {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div className="overflow-x-auto bg-secondary-0 ">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProposalTable;
