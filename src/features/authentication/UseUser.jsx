import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

const UseUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });
  const { user={} } = data || {};
  return { user, isLoading, data };
};

export default UseUser;
