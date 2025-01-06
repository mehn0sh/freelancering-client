import React from "react";
import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

const CompleteProfile = () => {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container flex justify-center pt-4 ">
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
