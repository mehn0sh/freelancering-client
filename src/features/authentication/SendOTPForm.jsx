import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getOtp } from "../../services/authService";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({onSubmit,isPending,register}) => {

  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <div>
          <TextField
            label=" شماره موبایل "
            name="phoneNumber"
            register={register}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full">ارسال کد تایید</button>
        )}
      </form>
    </div>
  );
};

export default SendOTPForm;
