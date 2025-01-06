import React from "react";

const Select = ({value,handleChange,options}) => {

  return (
      <select value={value} onChange={handleChange} className='textField__input py-2 text-xs bg-secondary-0'>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
  );
};

export default Select;
