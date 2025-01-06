import React from "react";
import AuthContainer from "../features/authentication/AuthContainer";


const Auth = () => {
  return (
    <div className="h-screen bg-secondary-0">


    <div className="flex justify-center pt-4">
      <div className="w-full sm:max-w-sm container">
       <AuthContainer/>
      </div>
      
    </div>
    </div>
  );
};

export default Auth;
