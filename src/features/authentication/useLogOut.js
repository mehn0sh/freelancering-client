import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const queryClient =  useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logOut } =  useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/auth", { replace: true });

      queryClient.removeQueries();
    },
  });
  return { isPending, logOut };

}
