import { useLocation } from "react-router-dom";
import UseUser from "./UseUser";

export default function useAuthorize() {
  const { isLoading, user } = UseUser();
  const { pathname } = useLocation();
  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;
  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;
  const desireRole = pathname.split("/").at(1);

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };
  if (Object.keys(ROLES).includes(desireRole)) {
    if (user && user.role == ROLES[desireRole])  isAuthorized = true;
  }

  return {isLoading,isAuthenticated,isAuthorized,user,isVerified}
}
