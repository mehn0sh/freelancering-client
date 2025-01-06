import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../ui/Loading";
import RHFSelect from "../../../ui/RHFSelect";
import { useChangeStatus } from "./useChangeStatus";

const ChangeUserStatus = ({ userId, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeStatus();
  const queryClient = useQueryClient();

  const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "در انتظار تایید",
      value: 1,
    },
    {
      label: "تایید شده",
      value: 2,
    },
  ];
  const onSubmit=(data)=>{
    changeUserStatus(
        { userId, data }, 
        {
          onSuccess: () => {
            onClose();
            queryClient.invalidateQueries({ queryKey: ["users"] });
          },
        }
      );
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
          register={register}
          name="status"
          label="تغییر وضعیت"
          required
          options={options}
        />
         <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangeUserStatus;
