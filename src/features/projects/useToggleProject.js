import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProjectStatusApi } from "../../services/projectService";

export default function useToggleStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: changeProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isUpdating, toggleProjectStatus };
}
