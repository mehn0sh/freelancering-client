import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ options, filterField }) => {
  const [isActive, setisActive] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-center text-xs gap-x-2">
      <span>وضعیت</span>
      <div className="flex  gap-x-4 rounded-lg border-secondary-100">
        {options.map((item) => {
          const isActive = item.value == currentFilter;

          return (
            <button
            disabled={isActive}
              key={item.value}
              onClick={() => handleClick(item.value)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-md transition-all duration-300 font-bold ${
                isActive ? "!bg-primary-900" : "bg-secondary-200"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
