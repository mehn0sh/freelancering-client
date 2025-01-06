import React from "react";

const RadioInput = ({ label, name, id, value, register,checked,errors,validationSchema }) => {
  return (
    <div className="flex gap-x-2 items-center text-secondary-700">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        {...register(name,validationSchema)}
        className="w-4 h-4 cursor-pointer accent-slate-500"
      />
      <label htmlFor={id}>{label}</label>

    </div>
  );
};

export default RadioInput;
