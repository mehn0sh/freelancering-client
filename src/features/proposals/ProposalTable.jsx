import React from "react";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

const ProposalTable = () => {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resourceName="پروپوزال" />;

  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal, index) => {
            return (
            <ProposalRow key={proposal._id} proposal={proposal} index={index}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProposalTable;
