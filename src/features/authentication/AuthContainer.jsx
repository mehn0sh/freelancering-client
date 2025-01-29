import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { getOtp } from "../../services/authService";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import UseUser from "./UseUser";
import { useNavigate } from "react-router-dom";
import useAuthorize from "./useAuthoriza";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const { user } = UseUser();
  const [phoneNumber, setphoneNumber] = useState("");
  const { handleSubmit, register, getValues } = useForm();
  const navigate = useNavigate();
 const {isVerified}= useAuthorize()

  useEffect(() => {
    if (isVerified) navigate("/");
  }, [user]);
  const { mutateAsync, isPending, error, data } = useMutation({
    mutationFn: getOtp,
  });
  const sendOTPHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success("خوش امدید");
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      {step == 1 ? (
        <SendOTPForm
          register={register}
          onSubmit={handleSubmit(sendOTPHandler)}
          isPending={isPending}
        />
      ) : step == 2 ? (
        <CheckOTPForm
          phoneNumber={getValues("phoneNumber")}
          onBack={() => setStep(1)}
          onResendOTP={sendOTPHandler}
          OTPResponse={data}
        />
      ) : null}
    </div>
  );
};

export default AuthContainer;
