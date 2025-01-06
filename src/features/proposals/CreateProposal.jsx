import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";
import { useCreateProposal } from "./useCreateProposal";

const CreateProposal = ({ onClose, projectId }) => {
  const { isCreating, createProposal } = useCreateProposal();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          required
          register={register}
          type="text"
          validationSchema={{ required: "توضیحات ضروری است" }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          required
          register={register}
          type="number"
          validationSchema={{ required: "قیمت ضروری است" }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          required
          register={register}
          type="number"
          validationSchema={{ required: "مدت زمان را وارد کنید" }}
          errors={errors}
        />

        <div className="mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال درخواست
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateProposal;
