import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
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

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { id: projectId } = useParams();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus({proposalId,projectId,...data},{
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['project',projectId]})
            onClose()

        }
    })
  };
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

export default ChangeProposalStatus;
