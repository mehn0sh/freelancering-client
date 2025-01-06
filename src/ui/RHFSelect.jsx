import React from "react";

const RHFSelect = ({ label, name, register, options, required }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {label} {required &&<span className="text-error">*</span> }
      </label>
      <select {...register((name))} id={name} className="textField__input">
        <option>انتخاب...</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFSelect;

