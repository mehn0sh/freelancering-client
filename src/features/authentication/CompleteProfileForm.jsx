import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CompleteProfileForm = () => {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [role, setrole] = useState("");
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className=" w-full sm:max-w-sm">
      <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
        <TextField
          label={"نام و نام خانوادگی"}
          name="name"
          register={register}
          required
          validationSchema={{
            required: "نام و نام خانوادگی ضروری است",
          }}
          errors={errors}
        />
        <TextField
          required
          label={"ایمیل"}
          name="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          errors={errors}
        />

        <div className="flex items-center justify-center gap-x-8">
          <RadioInput
            name={"role"}
            value={"OWNER"}
            id={"OWNER"}
            label={"کارفرما"}
            register={register}
            checked={watch("role") == "OWNER"}
            errors={errors}
            validationSchema={{
              required:"انتخاب نقش ضروری است",
            }}
          />
          <RadioInput
            name={"role"}
            value={"FREELANCER"}
            id={"FREELANCER"}
            label={"فریلنسر"}
            register={register}
            checked={watch("role") == "FREELANCER"}
            errors={errors}
            
            validationSchema={{
              required:"انتخاب نقش ضروری است",
            }}

          />
      {errors && errors['role'] && (
            <span className="text-error block text-sm mt-2">
              {errors['role']?.message}
            </span>
          )}
        </div>
        <button className="w-full btn btn--primary ">تایید</button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
