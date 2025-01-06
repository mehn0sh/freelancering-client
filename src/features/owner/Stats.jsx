import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  console.log(projects);
  const numOfAcceptedProjects = projects.filter(
    (p) => p.status === "CLOSED"
  ).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        title="درخواست ها"
        color="yellow"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOfProposals}
      />
      <Stat
        title="پروژه های واگذار شده"
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={numOfAcceptedProjects}
      />
    </div>
  );
};

export default Stats;
