import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthoriza";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated, isAuthorized, user,isVerified } = useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isLoading, navigate, isAuthenticated, isAuthorized]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  }
  if (isAuthorized) return children;
};

export default ProtectedRoute;
