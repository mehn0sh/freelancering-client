import React from "react";
import Stat from "../owner/Stat";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

const Stats = ({ proposals }) => {
  const numOfProposals = proposals.length;
  let numOfAcceptedProposals =[]
proposals.map((p) => {
  if (p.status == 2 ) {

    numOfAcceptedProposals=[...numOfAcceptedProposals,p]
  } ;
  });

  const balance = numOfAcceptedProposals.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        title="تعداد درخواست ها"
        color="yellow"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProposals}
      />
      <Stat
        title="درخواست های تایید شده"
        color="primary"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOfAcceptedProposals.length}
      />
      <Stat
        title="کیف پول"
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={balance}
      />
    </div>
  );
};

export default Stats;
