import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../owner/Stat";

const Stats = ({ proposals, projects, users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        title="کاربران"
        value={users}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        title="درخواست ها"
        color="yellow"
        icon={<HiCollection className="w-20 h-20" />}
        value={proposals}
      />
      <Stat
        title="پروژه ها"
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={projects}
      />
    </div>
  );
};

export default Stats;
