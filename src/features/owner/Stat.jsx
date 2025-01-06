import React from "react";

const Stat = ({ icon, value, title, color }) => {
  const colors = {
    primary: "bg-primary-100 text-primary-700",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
  };
  return (
    <div className="col-span-1 grid sm:grid-rows-2 grid-cols-2 bg-secondary-0  p-2 sm:p-4 rounded-lg  gap-x-1 sm:gap-x-8  ">
      <div
        className={`row-span-2 max-sm:max-h-10 flex items-center justify-center  p-1 sm:p-2 aspect-square rounded-full ${colors[color]} `}
      >
        {icon}
      </div>
      <h5 className="   font-bold text-secondary-500  max-sm:text-[12px] -mr-3 text-xl  ">{title}</h5>
      <p className="sm:text-2xl text-sm font-bold text-secondary-900  max-sm:max-h-6">{value.toLocaleString("fa")}</p>
    </div>
  );
};

export default Stat;
