import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "../../services/authService";
import Loading from "../../ui/Loading";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

const CheckOTPForm = ({ phoneNumber, onBack, onResendOTP, OTPResponse }) => {
  const [otp, setOtp] = useState("");
  const [time, settime] = useState(RESEND_TIME);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: checkOtp,
  });
  const navigate = useNavigate();
  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        if (user.role === "OWNER") return navigate("/owner");
        if (user.role === "FREELANCER") return navigate("/freelancer");
        if (user.role === "ADMIN") return navigate("/admin");
      } else {
        return navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => settime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {OTPResponse && (
        <p className="flex items-center gap-x-2 my-4 text-secondary-700">
          <span> {OTPResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOTP}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOTPHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-secondary-700">-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: "2rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-900))",
            borderRadius: "0.5rem",
            backgroundColor: "transparent",
            color: "rgb(var(--color-secondary-700))",
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full">تایید</button>
        )}
      </form>
    </div>
  );
};

export default CheckOTPForm;
